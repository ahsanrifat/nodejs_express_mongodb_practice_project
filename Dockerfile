FROM node:alpine
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm install
CMD node index.js
