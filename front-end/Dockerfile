FROM node:16.14-alpine

RUN npm install -g http-server

WORKDIR /app-frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "http-server", "dist" ]
