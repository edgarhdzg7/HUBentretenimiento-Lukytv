# Utiliza una imagen de Node.js 18 como base
FROM node:18-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package*.json y instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos del proyecto y construye
COPY . .
RUN npm run build --prod

# Utiliza una imagen de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos al contenedor de Nginx
COPY --from=build /app/dist/luky-tv /usr/share/nginx/html


# Expone el puerto en el que Nginx estará escuchando
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]