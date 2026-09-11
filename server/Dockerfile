FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY server.mjs ./
COPY src ./src
COPY assets/email-logo.png ./assets/email-logo.png

ENV NODE_ENV=production
EXPOSE 3001

CMD ["npm", "start"]