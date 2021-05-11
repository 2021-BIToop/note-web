FROM node:16-alpine3.11 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN npm run build
CMD ["npm", "run", "serve"]