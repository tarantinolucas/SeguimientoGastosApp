# Patagonia Tracker - Aplicación de Seguimiento de Gastos

Una aplicación web diseñada para el registro, gestión y visualización de gastos compartidos durante un viaje. El sistema permite la carga rápida de transacciones desde dispositivos móviles y ofrece un resumen financiero en tiempo real, facilitando el control presupuestario entre dos usuarios.

## ✨ Características Principales

- **Registro Rápido de Gastos:** Añade nuevas transacciones en segundos.
- **Gestión Compartida:** Diseñado para que dos usuarios puedan gestionar sus gastos comunes.
- **Visualización de Datos:** Gráficos y resúmenes para entender el estado financiero del viaje al instante.
- **Diseño Responsivo:** Accede y gestiona tus gastos desde cualquier dispositivo, ya sea móvil o de escritorio.
- **Control Presupuestario:** Mantén un seguimiento claro de quién pagó qué y cuál es el saldo entre los participantes.

## 🛠️ Arquitectura y Tecnologías

La aplicación sigue una arquitectura de microservicios desacoplada para el frontend y el backend.

### Frontend

- **Framework:** [React.js](https://reactjs.org/) (utilizando [Vite](https://vitejs.dev/) para un desarrollo rápido)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) para un diseño moderno y personalizable.

### Backend

- **Entorno de Ejecución:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) para la creación de la API REST.

### Base de Datos

- **Sistema:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (NoSQL en la nube).
- **Modelado:** [Mongoose](https://mongoosejs.com/) como ODM para definir esquemas y modelos.

### Infraestructura y Despliegue

- **Frontend:** Desplegado en [Vercel](https://vercel.com/) para una integración y entrega continuas.
- **Backend:** Desplegado en [Render](https://render.com/) o [Fly.io](https://fly.io/) para un servicio escalable y robusto.

## 🚀 Puesta en Marcha (Desarrollo Local)

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

### Prerrequisitos

- Node.js (v18 o superior)
- npm / yarn / pnpm
- Una cuenta de MongoDB Atlas para obtener la URI de conexión.

### 1. Backend (`/server`)

```bash
# Navega al directorio del servidor
cd server

# Instala las dependencias
npm install

# Crea un archivo .env y añade la URI de tu base de datos y el puerto
# PORT=3001
# MONGODB_URI=tu_uri_de_mongodb_atlas

# Inicia el servidor de desarrollo
npm start
```

El servidor backend estará corriendo en `http://localhost:3001`.