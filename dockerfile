# Configuracao do dockerfile
FROM ubuntu:latest
RUN mkdir application
RUN cd application
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm i -g typescript
RUN npx tsc ./public/library/ -outDir ./test/library/
