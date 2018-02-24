FROM node:alpine

RUN addgroup -S app && adduser -S -g app app \
&& apk update && apk upgrade \
&& apk add --no-cache build-base python curl

RUN chown -R app:app /home/app

WORKDIR /home/app

COPY . $WORKDIR

USER app

# RUN npm install
RUN yarn

EXPOSE 4200

CMD ["npm", "start"]
