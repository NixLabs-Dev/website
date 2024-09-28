# dependencies image
FROM node:20 as base
WORKDIR /app
COPY package*.json ./
RUN npm install

# builder image
FROM base as builder
WORKDIR /app
COPY . .
RUN npm run build

# production image
FROM nginx:stable as production                        
WORKDIR /app
COPY --from=builder /app/out /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q0", "http://localhost:80/" ]

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
