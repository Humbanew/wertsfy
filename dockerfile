# Configuracao do dockerfile
FROM ubuntu:latest
ENV key=development
RUN apt-get update
RUN apt-get install -y nodejs npm docker
RUN npm i -g typescript
CMD npx tsc ./public/wertsfy.ts -outDir ./test/
