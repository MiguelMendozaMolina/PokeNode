### BASE
FROM node:12.18-alpine3.11 AS base
# Set the working directory
WORKDIR /app
# Copy project specification and dependencies lock files
COPY package.json ./
# COPY pub-sub-key.json ./
# COPY .env ./
# Install Node.js development dependencies if --build-arg DEBUG=1, or production dependencies
RUN npm install
RUN npm audit fix

### RELEASE
FROM node:10.21-alpine3.11 AS relase
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
EXPOSE 3000

# Run
#CMD ["npm","run-script","start"]
CMD [ "npm", "start" ]
