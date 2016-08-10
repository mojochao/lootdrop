FROM node:argon

# Create app directory
RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY server.js /app

EXPOSE 3000

CMD ["npm", "start"]
