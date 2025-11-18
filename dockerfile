FROM node:20
MAINTAINER shasank
WORKDIR /Southindiatours
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]


