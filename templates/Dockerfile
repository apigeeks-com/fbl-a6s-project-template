FROM node:8-alpine

EXPOSE 8080

WORKDIR /app
ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile
ADD . /app
RUN npm run build

CMD ["sh", "-c", "yarn start"]
