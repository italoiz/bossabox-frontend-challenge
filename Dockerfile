#################
## BUILD STAGE ##
#################
FROM node:10.16-alpine AS BUILD-APP

# SETUP ENVIRONMENT FOLDER
RUN mkdir -p /app

# SETUP WORKDIR AND COPY FILES
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

# INSTALL PACKAGES AND COPY PROJECT FILES
RUN yarn install
COPY . .

# CREATE PRODUCTION ENVIRONMENT VAR
ENV NODE_ENV=production

# BUILD APP
RUN yarn build:app

######################
## PRODUCTION STAGE ##
######################
FROM nginx:1.17.1-alpine

COPY --from=BUILD-APP /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
