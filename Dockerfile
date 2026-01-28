# ---------- Runtime Stage ----------
FROM nginx:1.27-alpine3.20

RUN apk update && apk upgrade --no-cache \
    && apk add --no-cache libpng tiff curl libxml2 expat \
    && rm -rf /var/cache/apk/*

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN mkdir -p /var/cache/nginx /var/run \
    && chown -R appuser:appgroup /var/cache/nginx /var/run

COPY --from=builder /app/dist /usr/share/nginx/html

RUN printf '%s\n' \
'pid /var/run/nginx.pid;' \
'worker_processes auto;' \
'events { worker_connections 1024; }' \
'http {' \
'  client_body_temp_path /var/cache/nginx;' \
'  proxy_temp_path /var/cache/nginx;' \
'  fastcgi_temp_path /var/cache/nginx;' \
'  uwsgi_temp_path /var/cache/nginx;' \
'  scgi_temp_path /var/cache/nginx;' \
'  include /etc/nginx/mime.types;' \
'  default_type application/octet-stream;' \
'  server {' \
'    listen 80;' \
'    server_tokens off;' \
'    add_header X-Content-Type-Options nosniff;' \
'    add_header X-Frame-Options DENY;' \
'    add_header X-XSS-Protection "1; mode=block";' \
'    root /usr/share/nginx/html;' \
'    index index.html;' \
'    location / { try_files $uri $uri/ /index.html; }' \
'  }' \
'}' > /etc/nginx/nginx.conf

RUN chown -R appuser:appgroup /usr/share/nginx /etc/nginx
RUN rm -rf /docker-entrypoint.d/*

USER appuser
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

