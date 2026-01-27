# -------- Builder --------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# -------- Secure Runtime --------
FROM nginx:1.27-alpine

# Patch vulnerable OS libs
RUN apk update && apk upgrade --no-cache \
    && apk add --no-cache libpng tiff curl \
    && rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Secure nginx config
RUN printf '%s\n' \
'server {' \
'  listen 80;' \
'  server_name _;' \
'  root /usr/share/nginx/html;' \
'  index index.html;' \
'  location / {' \
'    try_files $uri $uri/ /index.html;' \
'  }' \
'}' > /etc/nginx/conf.d/default.conf

# Permissions
RUN chown -R appuser:appgroup /usr/share/nginx /var/cache/nginx /var/run

USER appuser
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

