FROM node:20-alpine

WORKDIR /app
COPY package* ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma

RUN npx prisma generate


RUN npm run build
EXPOSE 3001

CMD ["node", "build/server.js"]


