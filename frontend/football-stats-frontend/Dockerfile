FROM node:14

WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# Start the application and print logs
CMD ["npm", "start"]
