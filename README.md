# Tecno Gamer - Store || Proyecto Final Coderhouse || React

## Índice

- [Demo](#demo)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Tecnologías](#tecnologías-utilizadas)

## Demo
Puedes ver una demostración en vivo de la aplicación en [este enlace](https://mega.nz/file/NsdgDDZQ#N4Nnisoyzuofu5wyzOtnnWGGxuttzmO2Gi8MAZmdfiM).

## Instalación
Para ejecutar esta aplicación, sigue estos pasos:

1. Clona el repositorio:
    git clone https://github.com/Scozzieroadriano/ProyectoFinalScozziero.git

2. Entrar en el directorio del proyecty:
    cd app

3. Instalar dependencias:
    npm install


## Uso

La aplicación de carrito de compras te permite agregar productos al carrito, gestionar su cantidad y finalizar la compra. A continuación, se detallan las acciones comunes que puedes realizar:

### 1. Agregar productos al carrito

1. Navega por la tienda y encuentra el producto que deseas comprar.
2. Haz clic en el botón "Agregar al Carrito" junto al producto.
3. El producto se agregará automáticamente al carrito.

### 2. Gestionar productos en el carrito

1. Abre la página del carrito haciendo clic en el icono del carrito en la parte superior de la página.
2. Verás una lista de todos los productos en tu carrito, junto con su cantidad y precio total.
3. Puedes ajustar la cantidad de cada producto utilizando los botones de incremento y decremento.
4. También puedes eliminar un producto del carrito haciendo clic en el botón "Eliminar".
5. Tambien puedes eliminar todos los productos al mismo tiempo.
6. El carrito verifica que solo puedas agregar una cantidad de producto hasta alcanzar el stock.

### 3. Revisa la información de tu compra
1. Podrás ver un checkout para terminar de verificar que compras exactamente lo que deseas.
2. Deberas completar un formulario para poder efectuar la compra.
### 4. Finalizar la compra

1. Una vez que hayas revisado y confirmado los productos en tu carrito, haz clic en el botón "Finalizar Compra".
2. Completa la información de envío y pago según las indicaciones proporcionadas.

### Características Adicionales

- *Selección de Productos*: Puedes seleccionar productos desde una lista principal de manera intuitiva.
- *Filtrado por Categorías*: La aplicación te permite filtrar productos por categorías para facilitar la búsqueda.
- *Animación de Carga*: Cuando realizas una acción que involucra solicitudes al servidor, como filtrar por categoría o finalizar la compra, verás una animación de círculo de carga en el centro de la pantalla. Esto simula el proceso de solicitud y mejora la experiencia del usuario mientras espera la respuesta del servidor.

¡Disfruta de tu experiencia de compra!

## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías y herramientas:

- **React**: Una biblioteca de JavaScript para la construcción de interfaces de usuario interactivas y componentes reutilizables.

- **JavaScript (ES6+)**: El lenguaje de programación principal utilizado para la lógica del lado del cliente.

- **Firebase**: Una plataforma de desarrollo de aplicaciones web y móviles que proporciona servicios de backend, incluyendo autenticación de usuarios y base de datos en tiempo real. (solo tiene informacion de productos).
Las imagenes estan subidas en el storage de firebase, desde ahi se obtienen los enlaces para poder cargar sus correspondientes rutas.

- **Bootstrap**: Un marco de diseño de código abierto que facilita la creación de interfaces de usuario atractivas y responsivas.

- **CSS**: Se utilizó CSS para estilos personalizados y dar formato al diseño de la aplicación.

Puedes encontrar más detalles sobre cómo se han utilizado estas tecnologías en el código fuente del proyecto.


-**NETLIFY**- Puedes acceder a la aplicación en vivo en [Netlify](https://tecnogamerstore.netlify.app/).

