FROM node:argon
RUN mkdir /app
WORKDIR /app
COPY package.json server.js /app/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
