FROM node:14

WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies and log the output
RUN npm install && echo "npm install completed successfully" || (echo "npm install failed" && exit 1)

# List node_modules to verify installation
RUN ls -la node_modules && ls -la

# Copy the rest of the application code
COPY . ./

# Start the application
CMD ["npm", "start"]
