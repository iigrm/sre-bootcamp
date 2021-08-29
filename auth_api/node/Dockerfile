FROM node:14-alpine

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "npm","run","start" ]


# App must run on port 8000
# Add your instructions to dockerize the application
