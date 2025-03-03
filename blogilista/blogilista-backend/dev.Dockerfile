FROM node:20

WORKDIR /usr/src/app

COPY . .

ENV PORT=3000

RUN npm install

CMD ["npm", "run", "dev"]
