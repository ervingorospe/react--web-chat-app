FROM node:16.17-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./

RUN yarn
EXPOSE 3001
CMD ["yarn", "start"]