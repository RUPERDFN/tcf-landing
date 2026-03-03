# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Build arguments for Vite
ARG VITE_APP_URL=https://app.thecookflow.com
ARG VITE_ASSETS_URL=https://assets.thecookflow.com
ARG VITE_FORMSPREE_ID=mkgpqpkl
ARG VITE_GA_TRACKING_ID
ARG VITE_PLAY_URL

ENV VITE_APP_URL=$VITE_APP_URL
ENV VITE_ASSETS_URL=$VITE_ASSETS_URL
ENV VITE_FORMSPREE_ID=$VITE_FORMSPREE_ID
ENV VITE_GA_TRACKING_ID=$VITE_GA_TRACKING_ID
ENV VITE_PLAY_URL=$VITE_PLAY_URL

# Build the application
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/nginx-health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
