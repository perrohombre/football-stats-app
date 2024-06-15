FROM node:14

WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install > npm-install.log 2>&1 && echo "npm install completed successfully" || (cat npm-install.log && echo "npm install failed" && exit 1)

# List node_modules to verify installation
RUN ls -la node_modules > node-modules.log

# Copy the rest of the application code
COPY . ./

# Start the application and print logs
CMD ["sh", "-c", "cat npm-install.log && cat node-modules.log && npm start"]
