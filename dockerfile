# Configuracao do dockerfile
FROM ubuntu:latest 
FROM node:latest

WORKDIR /conteiner

COPY tsconfig.json /conteiner/tsconfig.json

COPY package.json /conteiner/package.json

COPY /library/wmath.lib.ts /conteiner/library/wmath.lib.ts

COPY /library/wmath.def.ts /conteiner/library/wmath.def.ts

RUN npm install 

RUN npx tsc ./library/wmath.lib.ts ./library/wmath.def.ts --outDir ./ultimate/ 

RUN rm -r /conteiner/node_modules/

RUN rm -r /conteiner/library/

RUN rm -r /conteiner/package.json

RUN rm -r /conteiner/package-lock.json

RUN rm -r /conteiner/tsconfig.json
