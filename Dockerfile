FROM node:12

WORKDIR /usr/src/app
ENV CHUNK_SIZE=60000
ENV USER=docker
ENV PASS=docker
EXPOSE 1935/tcp
EXPOSE 8000/tcp

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "index.js"]