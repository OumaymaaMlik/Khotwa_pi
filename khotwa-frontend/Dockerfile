# ─────────────────────────────────────────────
# Stage 1 : Build Angular
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm ci

# Copier les sources et builder en production
COPY . .
RUN npm run build -- --configuration production

# ─────────────────────────────────────────────
# Stage 2 : Servir avec Nginx
# ─────────────────────────────────────────────
FROM nginx:alpine

# Supprimer la config nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Ajouter une config nginx adaptée à Angular (routing HTML5)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build Angular (ajuste le nom du projet si besoin)
COPY --from=builder /app/dist/khotwa-ng /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
