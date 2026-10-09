# 📄 Hito 2 - React - Pizzeria Il Tomaco.
# 📄 Hito 3 - React - Pizzeria Il Tomaco.
# 🔄 Actualización a Hito - React - Pizzeria Il Tomaco.

 ## 🧠 Descripción del proyecto.

Aplicación web desarrollada en React y Vite para la pizzería "Il Tomaco", este proyecto permite navegar por la oferta de productos, gestionar el carrito de compras dinámicamente y contar con vistas de registro y login. Estos son algunos de los conceptos utilizados:

⚙️ Métodos y Funciones Clave

**`useState`** (React Hook): Manejo del estado local para gestionar los datos de los formularios (email, contraseña), así como para administrar las cantidades y elementos del carrito de compras.

**`e.preventDefault()`** Intercepción del comportamiento nativo del navegador en los formularios para validar los datos sin recargar la página.

**`map()`** Método de array utilizado para iterar sobre el listado de pizzas (`pizzas.js`) y renderizar dinámicamente cada tarjeta de producto (`CardPizza`) y los ítems dentro del carrito (`CartPages`).

**`reduce()`** Método de array para procesar los elementos seleccionados en el carrito y calcular el monto total a pagar de forma dinámica.

**`toLocaleString("es-CL")`** Función de JavaScript utilizada para formatear los precios numéricos a la moneda local chilena (CLP).

### 🛣️ Uso de Rutas con React Router DOM

La aplicación utiliza `react-router-dom` para gestionar la navegación entre páginas sin recargar el navegador (Single Page Application):

* **`<BrowserRouter>`**: Envuelve la aplicación para habilitar el historial de navegación.
* **`<Routes>` y `<Route>`**: Definen la correspondencia entre la URL actual y el componente que debe renderizarse.
  * `/`: Carga la página principal (`HomePages`).
  * `/login`: Muestra el formulario de inicio de sesión (`LoginPages`).
  * `/register`: Muestra la vista de registro (`FormularioPages`).
  * `/cart`: Muestra el detalle de la compra e interactividad de productos (`CartPages`).
* **`<Link to="...">`**: Sustituye a las etiquetas `<a>` tradicionales dentro de componentes como `Navbar` para realizar transiciones de rutas sin recargar.

## 🛠 Tecnologías implementadas

* **`React`** Librería JavaScript para la construcción de interfaces de usuario.
* **`Vite`** Entorno de desarrollo rápido y empaquetador para producción.
* **`Bootstrap`** Framework CSS para componentes adaptativos y estilizados.
* **`CSS`** Estilos personalizados de diseño, grillas y control visual.
* **`Git & GitHub`** Control de versiones y despliegue continuo.
* **`Vercel`** Plataforma de despliegue cloud.

## 🏗️ Estructura del proyecto.

```
 📦react-hito3
 ┣ 📂public
 ┃ ┣ 📜favicon.svg
 ┃ ┗ 📜icons.svg
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜caprichoza.png
 ┃ ┃ ┣ 📜carbonara.png
 ┃ ┃ ┣ 📜hero.png
 ┃ ┃ ┣ 📜margarita.png
 ┃ ┃ ┣ 📜marina.png
 ┃ ┃ ┣ 📜prociutto.png
 ┃ ┃ ┣ 📜react.svg
 ┃ ┃ ┣ 📜veggie.png
 ┃ ┃ ┣ 📜verduras.jpg
 ┃ ┃ ┗ 📜vite.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜CardPizza.jsx
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Hero.jsx
 ┃ ┃ ┗ 📜Navbar.jsx
 ┃ ┣ 📂js
 ┃ ┃ ┗ 📜pizzas.js          <-- Array con el listado de pizzas.
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜CartPages.jsx      <-- Componente de vista e interacción del carrito de compras.
 ┃ ┃ ┣ 📜FormularioPages.jsx
 ┃ ┃ ┣ 📜HomePages.jsx
 ┃ ┃ ┗ 📜LoginPages.jsx
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md              <-- Estamos aquí.
 ┗ 📜vite.config.js
 ```

## 🔗 Links.
Actualmente estoy trabajando en: [Hito 4 - React - Pizzeria Il Tomaco](https://react-hito2-pied.vercel.app/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://kevin-alcaino.github.io/Kevin-alcaino.io/)

## 🙋‍♂️ Autor.
© 2026. Kevin Alcaino.
