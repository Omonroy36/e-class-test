FROM node:16

WORKDIR /app

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -

RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

COPY package.json /app

COPY . /app

RUN yarn install

RUN yarn run build

COPY . /app

EXPOSE 8080 2222

CMD ["npm","run","start"]