# Étape 1 : Build Angular
FROM node:20 AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances (plus fiable que npm install)
RUN npm ci

# Copier le reste du projet
COPY . .

# Build de l’application Angular
RUN npm run build --prod

# Étape 2 : Servir avec Nginx
FROM nginx:alpine

# Copier le build Angular vers nginx
COPY --from=build /app/dist/gestion_compte /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Pour construire l'image Docker, utilisez la commande :
# docker build -t gestion_compte .
