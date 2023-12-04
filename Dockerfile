FROM node:18

# This is the directory in the container where the application will be placed
WORKDIR /usr/src/app 
# Copy package.json and package-lock.json to the container
COPY package*.json ./ 

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["yarn", "dev"]
