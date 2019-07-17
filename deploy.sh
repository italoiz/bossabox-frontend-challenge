#!/bin/bash

echo "Copying files to remote server...";
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/build "$SSH_USER@$SSH_HOST":/app/frontend

echo "Entering the server..."
ssh "$SSH_USER@$SSH_HOST" <<EOF
  cd /app/frontend
  echo "Creating docker image..."
  docker image build --tag vuttr-frontend:latest --no-cache .
  echo "Removing old container..."
  docker container rm -f vuttr-frontend || true
  echo "Starting the new container image..."
  docker container run --name vuttr-frontend --detach --publish 8080:80
EOF

echo "Deploy completed..."