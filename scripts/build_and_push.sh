#!/usr/bin/env bash
# Simple helper to build and push the Docker image locally

set -euo pipefail

DOCKER_USER=${1:-"your-docker-username"}
IMAGE_NAME=${2:-"adoptme-backend"}
TAG=${3:-"latest"}

echo "Building image ${DOCKER_USER}/${IMAGE_NAME}:${TAG}"
docker build -t ${DOCKER_USER}/${IMAGE_NAME}:${TAG} .

echo "Pushing image to Docker Hub"
docker push ${DOCKER_USER}/${IMAGE_NAME}:${TAG}

echo "Done"
