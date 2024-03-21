# Gunakan image Node.js versi 20 sebagai base image
FROM node:latest

# Tentukan direktori kerja di dalam container
WORKDIR /src

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependencies menggunakan npm
RUN npm install

# Salin seluruh file ke direktori kerja
COPY . .

# Port yang akan digunakan oleh aplikasi
EXPOSE 8080

# Perintah untuk menjalankan aplikasi ketika container dijalankan
CMD ["npm", "start"]