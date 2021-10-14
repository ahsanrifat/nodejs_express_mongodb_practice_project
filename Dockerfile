FROM node:alpine
COPY package*.json .
# RUN executes at the time of building image
RUN npm install
COPY . /app
WORKDIR /app
EXPOSE 3000 
# CMD is a run time instruction
# will not initiate new shell
CMD ["node" ,"index.js"]
