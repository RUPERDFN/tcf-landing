<<<<<<< HEAD
# Stage 1: Build
=======
>>>>>>> 6d3fbbef719c31e6eb38ece3b9a01947b58e830e
FROM node:20-alpine AS builder

WORKDIR /app

<<<<<<< HEAD
# Install dependencies
COPY package*.json ./
RUN npm ci --only=production=false

# Copy source files
COPY . .

# Build arguments for Vite
ARG VITE_APP_URL=https://app.thecookflow.com
ARG VITE_ASSETS_URL=https://thecookflow.com

ENV VITE_APP_URL=$VITE_APP_URL
ENV VITE_ASSETS_URL=$VITE_ASSETS_URL

# Build the application
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist/public /usr/share/nginx/html

# Copy static files
COPY public/robots.txt /usr/share/nginx/html/robots.txt
COPY public/sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY public/site.webmanifest /usr/share/nginx/html/site.webmanifest

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/nginx-health || exit 1

# Start nginx
=======
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

>>>>>>> 6d3fbbef719c31e6eb38ece3b9a01947b58e830e
CMD ["nginx", "-g", "daemon off;"]
