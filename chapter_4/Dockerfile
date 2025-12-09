# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json & package-lock.json files to the container
COPY package*.json .

# Install necessary dependencies
RUN npm Install

# Copy the rest of the application code
COPY . .

# Expose the port that the application runs on
EXPOSE 5000

# Define the command that runs the application
CMD ["node", "./src/server.js"]