# Étape 1 : Build Angular
FROM node:16 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Étape 2 : Serve avec Nginx
FROM nginx:alpine

# Supprime la page par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie les fichiers Angular buildés
COPY --from=build /app/dist/gestion_compte /usr/share/nginx/html

# Expose le port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
