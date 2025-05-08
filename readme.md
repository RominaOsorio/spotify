# 🎵 Spotify Clone

Este proyecto es un clon de Spotify que incluye un **backend** para la gestión de usuarios y un **frontend** para la reproducción de música. Fue desarrollado utilizando tecnologías modernas como **Node.js**, **Express**, **MongoDB**, **React**, y **TailwindCSS**.

## 🛠️ Tecnologías utilizadas

### Backend

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir la API REST.
- **MongoDB**: Base de datos NoSQL para almacenar datos de usuarios.
- **Mongoose**: ODM para interactuar con MongoDB.
- **JWT (JSON Web Tokens)**: Para la autenticación y autorización.
- **bcrypt.js**: Para el hash de contraseñas.
- **dotenv**: Para la gestión de variables de entorno.

### Frontend

- **React**: Biblioteca para construir interfaces de usuario.
- **React Router**: Para la navegación entre páginas.
- **Redux**: Para la gestión global del estado.
- **TailwindCSS**: Framework de CSS para estilos rápidos y responsivos.
- **React Toastify**: Para notificaciones.

## 🚀 Funcionalidades principales

### Backend

1. **Autenticación de usuarios**:
   - Registro de usuarios con validación de datos.
   - Inicio de sesión con generación de tokens JWT.
2. **Gestión de usuarios**:
   - Obtener datos del usuario autenticado.
   - Listar todos los usuarios registrados (para pruebas).

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


### Frontend

1. **Reproductor de música funcional**:
   - Controles de reproducción (play, pause, next, previous).
   - Visualización de progreso y duración.
2. **Gestión de usuarios**:
   - Registro e inicio de sesión.
   - Persistencia de sesión con tokens JWT.
3. **Interfaz moderna y responsiva**:
   - Navegación intuitiva.
   - Diseño atractivo con TailwindCSS.


## ⚙️ Configuración

### Backend
1. Crea un archivo `.env` en la carpeta `backend` basado en `.env.example`:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/spotify
   JWT_SECRET=tu_secreto_para_jwt

2. Instala las dependencias
    cd backend
    npm install

3. Inicia el servidor:
    npm run dev

### Frontend

1. Instala las dependencias
    cd frontend
    npm install

2. Inicia el servidor:
    npm run dev

📝 Notas adicionales
Este proyecto es una adaptación de un tutorial y está diseñado para fines educativos.

¡Gracias por revisar este proyecto!