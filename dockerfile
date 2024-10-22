FROM node:18.17.0

WORKDIR /usr/apps/boilerNodeExpress

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE ${PORT}

CMD ["/bin/sh", "-c", "npm run build && npm run start"]
