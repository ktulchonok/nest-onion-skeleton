FROM node:20.9-alpine as development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node  . .

USER node

CMD [ "npm", "run", "start:dev" ]

####################################################################################################

FROM node:20.9-alpine as build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
# In order to run `npm run build` we need access to the Nest CLI which is a dev dependency. 
# In the previous development stage we ran `npm ci` which installed all dependencies,
# so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production
# Running `npm ci` removes the existing node_modules directory and passing in --only=production
# ensures that only the production dependencies are installed.
# This ensures that the node_modules directory is as optimized as possible
RUN npm ci --only=production && npm cache clean --force

USER node

####################################################################################################

FROM node:20.9-alpine as production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
