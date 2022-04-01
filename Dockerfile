FROM node:16-alpine

# RUN apt-get update && apt-get install —yes ssh nginx
WORKDIR /usr/src/app
COPY package*.json ./
COPY app.js ./
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
#CMD exec bash ./start.bash
