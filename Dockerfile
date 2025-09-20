# Étape 1 : Build Angular
FROM node:20 AS build

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm ci

# Installer Angular CLI global (optionnel)
RUN npm install -g @angular/cli

# Copier le code source
COPY . .

# Build Angular
RUN npm run build --configuration gestion_compte

# Étape 2 : Serve avec Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/gestion_compte /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
