# Prueba-t-cnica-con-Promesas-fetching-y-testing-E2E
Crear una aplicación React que al cargar muestre un hecho aleatorio sobre gatos y una imagen relacionada. Debe haber un botón para obtener un nuevo hecho y su imagen correspondiente.

APIs:

    - Facts Random: https://catfact.ninja/fact
    - Imagen random: https://cataas.com/cat/says/hello
    
    - Recupera un hecho aleatorio de gatos de la primera API
    - Recuperar la primera palabra del hecho
    - Muestra una imagen de un gato con la primera palabra.


Pasos para configurar el proyecto

1. npm create vite@latest

2. Select Vanilla

3. Select JavaScript

4. Acceder a la carpeta del proyecto

5. Instalar el plugin npm install @vitejs/plugin-react -E

6. Instalar las dependencias npm install react react-dom -E

7. Crear el archivo de configuración vite.config.js

8. Crear el punto de entrada, modificaremos el main.js

9. Cambiar el nombre main.js por main.jsx y en index.html en el import del main

10. Intalar el linter npm install standard -D

11. Configurar el linter en el package.json