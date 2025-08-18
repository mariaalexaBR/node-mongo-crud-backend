# node-mongo-crud-backend
Repositorio con una implementación básica de conexión a MongoDB usando Node.js. Incluye un CRUD de usuarios con funcionalidades esenciales para registro y login (autenticación).

# Ejecutar el archivo Docker-Compose.yml
- docker-compose up -d
<!--
Esto no muestra los logs en la consola, pero los contenedores siguen corriendo.

Luego puedes ver los logs específicos solo de tu app con:
-->
- docker-compose logs -f app
<!--
-f → “follow”, es decir, mostrar los logs en tiempo real.

Así solo ves lo que imprime tu contenedor app y no todos los mensajes de Mongo.
-->

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

# Dependecias utilizadas

- nodemon <!-- monitorea automáticamente los archivos del proyecto y reinicia el servidor de forma automática cada vez que detecta cambios en el código. -->
# Nota
<!--
nodemon no detecta cambios en Windows con Docker, por lo que no funciona
-->
