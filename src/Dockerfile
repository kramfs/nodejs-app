FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000

#ENTRYPOINT [ "npm", "start" ]
CMD /wait && npm start