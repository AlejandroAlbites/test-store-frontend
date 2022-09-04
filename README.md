## SOLUCIÓN

- Proyecto desplegado en Netlify: https://bsale-store-test.netlify.app/

### Resumen

Este proyecto es una aplicación web para una tienda online de productos, donde el usuario puede realizar las siguientes funciones:

1. Al ingresar a la web el usuario puede visualizar una lista general de todos los productos de la tienda.
2. La tienda cuenta con 2 barras de navegación, una principal donde el usuario tiene un input donde puede escribir el producto que desee buscar, si el usuario escribe un nombre no válido, la aplicación le informará que no existe un producto con ese nombre y se le invita a revisar todo el catálogo de productos.
3. La segunda barra de navegación muestra las categorías de los productos, el usuario con un click puede acceder a los filtros por categorías.
4. Se agregaron los descuentos en las cards de los productos para que el usuario esté informado sobre los descuentos.
5. Si el usuario compra un producto, se agregó una notificación informándole que su producto fue añadido a un carrito de compras.
6. Si el usuario selecciona el carrito de compras que se encuentra en la barra principal de navegación, se agregó una notificación informándole que esa funcionalidad no está disponible por el momento. Solo se abordaron las funcionalidades descritas en el test.

### Requerimientos

Para ejecutar el proyecto de manera local se requiere clonar el repositorio y utilizar la extensión Live Server de visual studio code.

### Despliegue en Netlify

El proyecto se encuentra desplegado en Netlify, puede utilizar el siguiente enlace para visualizar el proyecto.

`https://bsale-store-test.netlify.app/`

## ACERCA DEL PROYECTO

El proyecto fue realizado con vanilla javascript, y para los estilos se trabajó con CSS puro.

### Glosario de archivos y carpetas

#### Archivos principales

- index.html: Archivo principal donde estructuramos nuestro proyecto con los elementos html.
- scripts/app.js: Archivo principal donde se encuentran las funciones principales para mostrar la aplicación, tales como InicialState, la cual hace el primer llamado a la API, para listar los productos. También se cuenta con las funciones searchByProduct y searchByCategory las cuales como su nombre indican realizan los filtros por productos y por categorías.
- scripts/fetchData.js: En este archivo se encuentra las funciones para hacer las peticiones al servidor. Contamos con 2 funciones getProducts y getCategories, las cuales como su nombre indican realizan las respectivas peticiones al servidor.
- scripts/components.js: En este archivo se encuentran las funciones componentes, que tienen estructura HTML para ser utilizadas cuando se requiera.
- scripts/helpers.js: En este archivo se encuentran funciones de ayuda las cuales permiten la interacción entre los componentes y las peticiones. Entre las principales funciones tenemos setProducts y setCategories, las cuales encargan de insertar los valores obtenidos de las peticiones en los componentes y agregarlo al index.html.

#### Carpetas

- styles: Carpeta donde se encuentran los estilos CSS distribuidos por secciones. Header(contiene los estilos de las barras de navegación), Main(contiene los estilos de las cards de los productos ), Footer (contiene los estilos del pie de página) y notificaciones (Las cuales contienen los estilos de las notificaciones el cual se renderiza en frente de todos los elementos html)
- scripts: Carpeta donde se encuentran los archivos javascript descritos en el apartado anterior.

### End
