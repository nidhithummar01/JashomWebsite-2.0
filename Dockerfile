# Production stage
FROM nginx:1.27-alpine

# Install runtime deps
RUN apk add --no-cache libpng tiff curl

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Create writable dirs for nginx
RUN mkdir -p /tmp/nginx/client_temp \
             /tmp/nginx/proxy_temp \
             /tmp/nginx/fastcgi_temp \
             /tmp/nginx/uwsgi_temp \
             /tmp/nginx/scgi_temp \
    && chown -R appuser:appgroup /tmp/nginx

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace nginx config
RUN printf '%s\n' \
'pid /tmp/nginx.pid;' \
'worker_processes auto;' \
'events { worker_connections 1024; }' \
'http {' \
'  client_body_temp_path /tmp/nginx/client_temp;' \
'  proxy_temp_path /tmp/nginx/proxy_temp;' \
'  fastcgi_temp_path /tmp/nginx/fastcgi_temp;' \
'  uwsgi_temp_path /tmp/nginx/uwsgi_temp;' \
'  scgi_temp_path /tmp/nginx/scgi_temp;' \
'  include /etc/nginx/mime.types;' \
'  default_type application/octet-stream;' \
'  server {' \
'    listen 80;' \
'    root /usr/share/nginx/html;' \
'    index index.html;' \
'    location / { try_files $uri $uri/ /index.html; }' \
'  }' \
'}' > /etc/nginx/nginx.conf

# Fix ownership
RUN chown -R appuser:appgroup /usr/share/nginx /etc/nginx

# Disable entrypoint scripts (they try to write /etc)
RUN rm -rf /docker-entrypoint.d/*

USER appuser
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

