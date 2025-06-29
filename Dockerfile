#Use a minimal Node.js base image
FROM node:18-alpine

#Set the working directory
WORKDIR /app

#Copy package files and install dependencies
COPY package*.json ./


#Copy the rest of the app
COPY . .

#Built the app
RUN npm run build

#Install a simple static server
RUN npm isntall -g server

#Expose the port the app will run in
EXPOSE 3000

#Serve the built app
CMD ["serve", "-s", "dist"]