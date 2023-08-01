# Stage 1: Build the Angular application
FROM node:12 as builder

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.17.1-alpine

COPY --from=builder /usr/src/app/dist/digit /usr/share/nginx/html

# Copy the default nginx.conf provided by the Angular CLI
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
