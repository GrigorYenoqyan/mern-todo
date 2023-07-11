FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV API_URL="http://localhost:5000"
ENV HTTP_REQUESTS_TIMEOUT=5000

EXPOSE 3000

CMD ["npm", "run", "dev"]
