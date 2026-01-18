# Stage 1: Build the Angular application
FROM node:alpine AS build

# Setup the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy other files and folders to the working directory
COPY . .

# Build Angular application in PROD mode
RUN npm install --save-dev @angular/cli

RUN ./node_modules/@angular/cli/bin/ng build -c production

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy built Angular app files to Nginx HTML folder
COPY --from=build /usr/src/app/dist/WeatherAccuracyMonitorFront/browser /usr/share/nginx/html
# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]