# Use Node image
FROM node:20-alpine

# Set working dir
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Build the app
RUN npm run build

# Install serve to serve dist folder
RUN npm install -g serve

# Run the app
CMD ["serve", "-s", "dist"]
