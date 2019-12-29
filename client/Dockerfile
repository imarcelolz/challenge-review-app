# Builder Image
FROM node:13-slim AS builder
LABEL maintainer="imarcelolz@gmail.com"

COPY package.json yarn.lock ./
RUN yarn --no-progress

COPY . .

RUN yarn build

# Deployment Image
FROM nginx:alpine AS app
COPY --from=builder --chown=nginx:nginx /dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
