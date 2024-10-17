# Usar una imagen oficial de Node.js como base
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Compilar el código TypeScript
RUN npm run build

# Exponer el puerto en el que correrá la aplicación dentro del contenedor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
