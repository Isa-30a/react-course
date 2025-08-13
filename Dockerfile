# Stage 1: Build React app
FROM node:20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm install && npm run build

# Stage 2: Backend Fastify API
FROM node:20 AS api
WORKDIR /app
COPY api/package.json api/package-lock.json ./
WORKDIR /app
COPY api/ .
COPY api/pizza.sqlite .
RUN npm install

EXPOSE 3000
CMD ["node", "server.js"]

# Stage 3: Nginx for frontend
FROM nginx:alpine AS frontend
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]