# node-mongo-crud-backend
Repositorio con una implementación básica de conexión a MongoDB usando Node.js. Incluye un CRUD de usuarios con funcionalidades esenciales para registro y login (autenticación).

# Contruir la Imagen de Docker
- docker build -t mi-app-node .

# Verificar las imagenes
- docker image

# Ejecutar el contenedor
- docker run --rm mi-app-node

# Nota
<!--
Volver a construir la imagen cuando existen modificaciones en el codigo, principalmente en index.js
-->


<!-- 📦 ¿Qué es package.json?
Es un archivo en formato JSON que:

Describe tu proyecto Node.js

Enumera sus dependencias (paquetes npm)

Define comandos/scripts que puedes ejecutar (como npm start)

Puede incluir configuraciones, metadatos y más
-->

# ¿Cómo crear package.json?
- npm init -y
