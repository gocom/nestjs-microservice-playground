FROM node:lts-alpine As build

# ARG NPM_TOKEN

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./

RUN npm ci --only=development

COPY --chown=node:node . .

RUN npm run build

USER node

FROM node:lts-alpine as production

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./

RUN npm ci --only=production

COPY --chown=node:node . .

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

USER node

CMD ["node", "dist/main"]
