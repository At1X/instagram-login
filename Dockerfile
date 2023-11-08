FROM node
RUN apt update
COPY package.json .
RUN npm i -g pnpm
RUN pnpm install
COPY . . 
RUN npm run build
