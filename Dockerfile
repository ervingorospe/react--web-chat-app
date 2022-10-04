FROM node:16.17-alpine

WORKDIR /react--web-chat-app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]