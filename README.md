# Tarjeta de crédito válida

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. UX diseño de experiencia de usuario](#2-UX-diseño-de-experiencia-de-usuario)
* [3. Interfaz de usuario](#3-interfaz-de-usuario)
* [4. script/ archivos](#4-Script/archivos)

***

## 1. [Definición del producto](#índice)

a continuación se presenta el producto digital elaborado.

### Validador de tarjetas para la tienda HQ HEADPHONES

Esta aplicación web permite al usuario de HQ HEADPHONES validar la tarjeta credito/ debito antes de realizar su compra.

* usuarios: los usuarios son los clientes que deseen realizar la compra de los audifonos 
* esta herramienta permite comprobar si la tarjeta que esta utilizando el cliente para adquirir el producto es valida o no.

## 2. [UX diseño de experiencia de usuario](#índice)

### prototipo de papel:

El enfoque inicial al trabajar mi primer prototipo con papel y lápiz (blanco y negro) fue crear una pagina solo para la validación de tarjetas.

<img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/lapiz_papel.jpeg"  width="300" height="280.3">  <img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/Captura.PNG" width="400">

### feedback con compañeras:
Al pedir feedback con algunas compañeras se determinó enfocarlo en la validacion de la tarjeta credito o debito cuando se va a relizar la compra de un objeto de una tienda online, en este ejemplo se tratará sobre una tienda de audifonos y el nuevo prototipo fue desarollado en la herramienta de diseño balsamiq, donde se construeyeron las pantallas mostradas a continuación:

* Pantalla inicial

<img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/pantalla%20inicial.png" width="400">

* pantalla de validación

<img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/validaci%C3%B3n.png" width="400">

* pantalla de validacion exitosa

<img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/validacion%20correcta.png" width="400">



## 3. [Interfaz de usuario](#índice)

La interfaz de usuario esta diseñada para que al navegar por la pagina de la tienda online HQ HEADPHONES y este decida efectuar su compra seleccionando el boton de compra correspondiente al objeto que desea adquirir como se ve en la siguiente imagen, la cual es la pantalla de inicio.

<img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/pantalla%20inicial(1).png" width="400">

una vez es pulsado e boton se procede a realizar la validacion de la tarjeta con la que va a realizar la compra como se observa en la siguiente pantalla. en ella se debe insertar el número que  se quiere validar. ademas de ocultar todos los dígitos de su número de tarjeta menos los últimos 4 caracteres y no permitir ingresar un campo vacío.

<img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/validaci%C3%B3n(1).png" width="400">

ya validada la tarjeta se tiene una pantalla en la que se  aprecia el resultado obtenido de la validacion con el algorithmo de luhn, para el caso de validacion correcta se tiene la siguiente pantalla, la que se muestra el resultado de la validacion y se procede a continuar  la compra del articulo.

<img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/validacion%20correcta(1).png" width="400">

 Ahora, para el caso en que la validaciÓn sea incorrecta se  tiene la siguiente pantalla, donde el usuario tiene la posibilidad de validar nuevamente la tarjeta o introducir una nueva tarjeta.
 
 <img src="https://github.com/leidyaJ/BOG003-card-validation/blob/master/images/validacion%20correcta%20copy.png " width="400">




## 4. [script/ archivos](#índice)

### Scripts / Archivos
vinvule vsc al  git hub
#### General

##### `README.md`

Debe contener lo siguiente:

* Un título con el nombre de tu proyecto.
* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.

#### Visualmente (HTML y CSS)

Deberás maquetar de forma exacta el prototipo final que hiciste en la herramienta
de diseño de prototipos que escogiste utilizando HTML y CSS. En este momento elegirás
los colores, tipo de fuente, etc a usar.

A continuación describimos los archivos que utilizarás:

##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Encontrarás 3 etiquetas iniciales, las cuales si deseas puedes borrar y empezar
de cero:

* `<header>`: encabezado de tu proyecto.
* `<main>`: contenido principal de tu proyecto.
* `<footer>`: pie de página de tu proyecto.

##### `src/style.css`

Este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS
(Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript - pruebas unitarias)

* La lógica del proyecto debe estar implementada completamente en JavaScript.
* En este proyecto NO está permitido usar librerías o frameworks, solo
  JavaScript puro también conocido como Vanilla JavaScript.

Vas a tener 2 archivos JavaScript separando responsabilidades, a continuación
indicamos qué harás en cada archivo:

##### `src/validator.js`

Acá escribirás las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

##### `src/index.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar las funciones `isValid` y `maskify`
según sea necesario para actualizar el resultado en la pantalla (UI).

##### `test/validator.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones
`validator.isValid(creditCardNumber)` y `validator.maskify(creditCardNumber)`
implementadas en `validator.js` utilizando [Jest](https://jestjs.io/es-ES/).
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura),
_statements_ (sentencias), _functions_ (funciones) y _lines_ (líneas); y un
mínimo del 50% de _branches_ (ramas).

***

