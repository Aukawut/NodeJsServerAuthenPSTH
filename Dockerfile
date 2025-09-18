# ---- Base image ----
FROM node:22.16.0-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy application source
COPY . .

# Expose app port
EXPOSE 5900

ENV PORT=5900
# Start the app
CMD ["npm", "start"]
