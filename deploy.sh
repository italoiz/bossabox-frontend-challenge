#!/bin/bash
set -ev

# Setup known hosts to avoid prompts
echo $SSH_KEY >> $HOME/.ssh/known_hosts
openssl aes-256-cbc -K $encrypted_94b97748e151_key -iv $encrypted_94b97748e151_iv -in deploy_rsa.enc -out /tmp/deploy_rsa -d
eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_rsa
ssh-add /tmp/deploy_rsa

# Copying files to remote server
rsync -r --delete-after --quiet \
  --exclude .git/ --exclude node_modules/ --exclude build/ \
  $TRAVIS_BUILD_DIR/ "$SSH_USER@$SSH_HOST":/app/frontend

# Entering the server
ssh "$SSH_USER@$SSH_HOST" <<EOF
  cd /app/frontend
  docker image build --tag vuttr-frontend:latest --no-cache .
  docker container rm -f vuttr-frontend || true
  docker container run --name vuttr-frontend -d -p 8080:80 vuttr-frontend:latest
EOF
