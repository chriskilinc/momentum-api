FROM node:8
WORKDIR ./
COPY package.json ./
RUN npm install
COPY . ./
CMD node ./src/index.js
EXPOSE 8082