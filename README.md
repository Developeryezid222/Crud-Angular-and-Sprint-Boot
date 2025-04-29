# Fullstack
# 🧑‍💼 Proyecto de Gestión de Usuarios - CRUD Fullstack

Este proyecto es una aplicación web completa para la **gestión de usuarios**, desarrollada utilizando tecnologías modernas del stack fullstack:

- **Frontend:** Angular 19
- **Backend:** Spring Boot (Java 17)
- **Base de datos:** MySQL (modelada y gestionada con MySQL Workbench)

---

## 🎯 Objetivo

El objetivo de esta aplicación es permitir la administración de usuarios a través de un sistema CRUD (Crear, Leer, Actualizar, Eliminar), proporcionando una interfaz amigable y funcionalidades robustas para gestionar la información de manera eficiente.

---

## ⚙️ Tecnologías Utilizadas

### 🧩 Frontend

- Angular 19 con TypeScript
- Formularios Reactivos (`ReactiveForms`)
- Bootstrap para el diseño visual
- Angular Material (opcional, si está integrado)
- Interceptores HTTP para manejo global de errores y autenticación

### 🧪 Backend

- Spring Boot con Java 17+
- Controladores REST (`@RestController`)
- Servicios y Repositorios (`@Service`, `@Repository`)
- Manejo de peticiones HTTP (`GET`, `POST`, `PUT`, `DELETE`)
- Configuración de CORS

### 🛢️ Base de Datos

- MySQL como sistema gestor de base de datos
- Modelado de tablas desde MySQL Workbench
- Conexión mediante `spring.datasource` en `application.properties`

---

## ✨ Funcionalidades

- ✔️ Listado de usuarios
- ➕ Creación de nuevos usuarios
- ✏️ Edición de usuarios existentes
- ❌ Eliminación de usuarios
- 🔍 Validaciones en los formularios (campos obligatorios, correos válidos, etc.)
- ⚠️ Manejo de errores del servidor
- 🔐 Soporte para integración de autenticación (extensible)

---

## 🧪 Ejecución del Proyecto

### 🖥️ Backend

1. Clonar el repositorio del backend.
2. Configurar `application.properties` con tu conexión MySQL.
3. Ejecutar el proyecto con Spring Boot (desde IDE o línea de comandos).
4. Asegurarse que esté disponible en: `http://localhost:8081/api/users` (ejemplo).

### 🌐 Frontend

1. Clonar el repositorio del frontend.
2. Instalar dependencias: `npm install`
3. Ejecutar: `ng serve`
4. Acceder a: `http://localhost:4200`

---

## 📸 Capturas (Opcional)



---

## 📦 Estructura de Carpetas

