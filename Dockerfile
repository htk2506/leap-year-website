FROM node:18-alpine

WORKDIR /app

COPY src ./

EXPOSE 8000

CMD ["node", "server.js"]
