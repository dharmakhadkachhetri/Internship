# Use official Node.js image
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json first (to optimize caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application files
COPY . .

# Expose port (should match the one in your app)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]