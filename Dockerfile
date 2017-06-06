FROM node:slim

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm i

# Bundle app source
COPY . /usr/src/app/

# Choose port and run command
EXPOSE 8080
CMD ["npm", "start"]