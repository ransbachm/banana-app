FROM node:14

WORKDIR /app

COPY package*.json ./

# -g -> global, server is in subdir
RUN npm install -g

COPY . .

#ignore
ENV PORT=80

EXPOSE 8080

CMD ["npm", "start"]

