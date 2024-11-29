#!/bin/bash

# Define container name and host directories
CONTAINER_NAME="nginx"
NGINX_CONFIG_DIR="./config"
HTML_DIR="./src"
LOG_DIR="./log"

# Create host directories
mkdir -p $NGINX_CONFIG_DIR
mkdir -p $HTML_DIR
mkdir -p $LOG_DIR

# Start a temporary Nginx container
docker run --name $CONTAINER_NAME -d nginx:latest

# Wait for the container to fully start
echo "Waiting for the container to start..."
sleep 5  # Wait 5 seconds to ensure the container is running

# Copy files from the container to the host
echo "Copying configuration files to the host..."
docker cp $CONTAINER_NAME:/etc/nginx $NGINX_CONFIG_DIR

echo "Copying static web files to the host..."
docker cp $CONTAINER_NAME:/usr/share/nginx/html $HTML_DIR

echo "Copying log files to the host..."
docker cp $CONTAINER_NAME:/var/log/nginx $LOG_DIR

# Stop and remove the temporary container
docker rm -f $CONTAINER_NAME

# Start the Nginx container using the host directories
echo "Starting Nginx container with host directory mounts..."
# Start Nginx container with docker-compose
docker-compose up -d
echo "Nginx container has started, configuration completed."

