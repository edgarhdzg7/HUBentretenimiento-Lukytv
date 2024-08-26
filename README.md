# LukyTv 
LukyTv: Tu Plataforma de Streaming Personalizada

LukyTv es una aplicación web diseñada para ofrecer una experiencia de visualización de películas única y personalizada. Con un diseño intuitivo y un catálogo en constante crecimiento, LukyTv te permite explorar un mundo de cine desde la comodidad de tu hogar.

![Captura LukyTV](assets/images/Captura.jpg)![captura](https://github.com/user-attachments/assets/6cc2d89e-5130-4dc0-9a1d-936313fdb8f0)

# Instalacion

Esta sección describe los pasos básicos para configurar el entorno de desarrollo de LukyTv.

Requisitos previos:

- Tener Git instalado en tu sistema.
- Node.js y npm (o yarn) instalados.


- Clona el repositorio: Ejecuta el comando git clone https://tu-repositorio.git para clonar el repositorio de LukyTv desde GitHub.

- Navega al directorio del proyecto: Utiliza el comando cd LukyTv para ingresar al directorio del proyecto recién clonado.

- Instala las dependencias: Ejecuta el comando npm install (o yarn install si estás utilizando yarn) para instalar las dependencias del proyecto.

- Nota: Es posible que necesites instalar y configurar MySQL y herramientas relacionadas para la base de datos. Sin embargo, esta sección se enfoca en la configuración del desarrollo de la aplicación LukyTv.

# Desarrollo
- Servidor de desarrollo

- Ejecuta el comando ng serve para iniciar un servidor de desarrollo local. Podrás acceder a LukyTv en tu navegador web dirigiéndote a http://localhost:4200/. Cualquier cambio que realices en el código se reflejará automáticamente en el navegador.

# Pruebas

- Pruebas unitarias

Ejecuta el comando ng test para ejecutar las pruebas unitarias del proyecto. Estas pruebas verifican el funcionamiento individual de los componentes de la aplicación.

Las primeras pruebas no salieron nada bien 
![image](https://github.com/user-attachments/assets/994b3fd9-2d72-4883-8e55-8697651e17dd)

# Funcionalidad

- Navega fácilmente por una extensa biblioteca de películas.
- Obtén detalles completos de cada película, incluyendo sinopsis, reparto, director y calificaciones.



# Creacion de tablas para la base de datos

![image](https://github.com/user-attachments/assets/68a38c5e-ee90-4cc3-933c-6dba9589955a)

![image](https://github.com/user-attachments/assets/0ecdb34d-7fc2-44a1-9830-1fb6f0f08cb9)


# Comunicacion con la base de datos para la obtencion de los datos
![image](https://github.com/user-attachments/assets/46ac0027-a08a-482b-b301-1e6a1817771b)

# Conexion con la base de datos 
![image](https://github.com/user-attachments/assets/162e461a-ddb3-4357-a0f6-13aa407e9aac)

# Normalizacion de la base de datos
![image](https://github.com/user-attachments/assets/fd76ce4e-b66e-4bc9-92f5-69bf5f8e57d6)


# Creacion de Pods 

Se realizo la creacion de pods , se presentaron algunos errores durante la creacion 

![image](https://github.com/user-attachments/assets/31b61e60-6d79-43ac-aa18-22859e26dc88)

# Creacion de imagen para API 

Se implemento Docker para la creacion de la imagen para la API

![image](https://github.com/user-attachments/assets/23f3cf30-74a2-463f-9112-c2a634478761)

# Imagen Docker 
![image](https://github.com/user-attachments/assets/7008ca14-821b-4212-9da3-dfe4884582da)


# Dockerfile del proyecto

![image](https://github.com/user-attachments/assets/e6e563d9-78a9-46d7-8a79-33bfe385299c)

# Estructura de la API creada 
![image](https://github.com/user-attachments/assets/bc21d4ca-25d5-48f0-95eb-8ba2e0c1801e)

# ¿Qué salió bien?

- Creacion de imagenes e implementacion de Docker
- Creacion de la API\
- Conocimientos adquiridos durante el sprint

# ¿Qué no salió bien?

- Implementacion de Kubernetes
- Administracion de los tiempos de trabajo
- Test de pruebas

  # ¿Qué puede mejorar?

  - La interfaz del proyecto
  - Implementar un login
  - Mejorar la organizacion del codigo
  - Mayor seguridad en la app


