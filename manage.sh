#!/bin/bash

if [ "$1" = "start" ]; then
    # Compile TypeScript and start the services
    echo "Starting services..."
    echo "Use env $NODE_ENV"
    if [ "$NODE_ENV" = "production" ]; then
        ENV_FILE=".env.production"
    else
        ENV_FILE=".env.development"
    fi
    echo "Starting Docker Compose with env file: $ENV_FILE"
    docker compose --env-file "$ENV_FILE" up -d 
elif [ "$1" = "stop" ]; then
    # Stop the services
    echo "Stopping services..."
    echo $NODE_ENV
    if [ "$NODE_ENV" = "production" ]; then
        ENV_FILE=".env.production"
    else
        ENV_FILE=".env.development"
    fi
    echo "Stopping Docker Compose services using env file: $ENV_FILE"
    docker compose --env-file "$ENV_FILE" down --volumes
else
    echo "Usage: ./manage.sh [start|stop]"
    exit 1
fi
