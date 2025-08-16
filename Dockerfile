# Usa una imagen liviana de Node
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./
RUN npm install

COPY . .

# Comando por defecto
CMD ["npm", "start"]
