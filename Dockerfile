# Usa una imagen liviana de Node
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto en el que la app escucha
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
