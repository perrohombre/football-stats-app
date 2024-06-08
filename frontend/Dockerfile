# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app/frontend

# Copy the package.json and package-lock.json files
COPY frontend/football-stats-frontend/package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY frontend/football-stats-frontend/ ./

# Expose the port the app runs on
EXPOSE 3000

# Run the command to start the application
CMD ["npm", "start"]
