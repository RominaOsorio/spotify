## 🎵 Backend de Spotify Clone

Este es el backend del proyecto **Spotify Clone**, desarrollado con **Node.js**, **Express**, y **MongoDB**. Proporciona una API REST para la autenticación de usuarios, registro, y gestión de datos relacionados con los usuarios.

## 🛠️ Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir la API REST.
- **MongoDB**: Base de datos NoSQL para almacenar los datos de los usuarios.
- **Mongoose**: ODM para interactuar con MongoDB.
- **JWT (JSON Web Tokens)**: Para la autenticación y autorización.
- **bcrypt.js**: Para el hash de contraseñas.
- **dotenv**: Para la gestión de variables de entorno.


## 🚀 Funcionalidades principales

### 1. **Autenticación de usuarios**
- **Inicio de sesión**: Verifica las credenciales del usuario (nombre de usuario o correo electrónico y contraseña) y genera un token JWT.
- **Registro de usuarios**: Permite crear una nueva cuenta con datos como correo, nombre de usuario, contraseña, género y fecha de nacimiento.

### 2. **Gestión de usuarios**
- **Obtener usuario autenticado**: Devuelve los datos del usuario autenticado utilizando el token JWT.
- **Listar usuarios**: Devuelve una lista de todos los usuarios registrados (solo para propósitos de prueba).

## 📄 Endpoints de la API

### **Autenticación**
| Método | Endpoint         | Descripción                          |
|--------|------------------|--------------------------------------|
| POST   | `/api/user/login` | Inicia sesión con nombre de usuario o correo y contraseña. |
| POST   | `/api/user/register` | Registra un nuevo usuario. |

### **Gestión de usuarios**
| Método | Endpoint         | Descripción                          |
|--------|------------------|--------------------------------------|
| GET    | `/api/user/me`    | Obtiene los datos del usuario autenticado. |
| GET    | `/api/user/users` | Lista todos los usuarios registrados. |

## ⚙️ Configuración

### 1. Variables de entorno
Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example`:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/spotify
JWT_SECRET=tu_secreto_para_jwt

### 2. Instalación de dependencias
npm install

### 3. Iniciar el servidor
npm run dev

El servidor estará disponible en http://localhost:3000