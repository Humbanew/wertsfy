# Configuracao do dockerfile
FROM ubuntu:latest 
FROM node:latest

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
