# Define la imagen base
FROM node:14-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo de dependencias y el archivo de bloqueo de versiones a la imagen
COPY package.json yarn.lock ./

# Instala las dependencias del proyecto con Yarn
RUN yarn

# Copia todo el contenido del directorio de la aplicación local a la imagen
COPY . .

# Expone el puerto que la aplicación escuchará
EXPOSE 4000

# Define el comando de arranque para iniciar la aplicación
CMD [ "yarn", "start" ]
