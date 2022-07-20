# Configuracao do dockerfile
FROM ubuntu:latest 
FROM node:latest

WORKDIR /app

COPY package.json /app

COPY tsconfig.json /app

COPY /library /app/library

RUN ls -al

RUN npm install

RUN npx tsc ./library/wlydroc.lib.ts --outDir ./library/escape/

CMD []
