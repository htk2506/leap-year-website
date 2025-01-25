FROM node:18-alpine

WORKDIR /app

COPY src ./

ARG PORT_ARG=8000

ENV PORT=${PORT_ARG}

EXPOSE ${PORT}

CMD ["node", "server.js"]
