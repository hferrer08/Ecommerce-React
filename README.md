# Ecommerce de videojuegos creado en React

## Que contiene?

El proyecto tiene un ItemListContainer donde se visualizaran los artículos guardados, traídos desde Firebase.
Así mismo cuentan con un boton ver detalles para ir al componente ItemDetailsContainer donde verá el artículo de forma mas detallada y podrá agregar al carrito.
También desde el navbar permite seleccionar por categoria, en este caso ps4 o switch. 
El carrito en el navbar se actualiza dinámicamente con los artículos que se vayan agregando. Al hacer click te envía al componente Cart donde aparecerá el resumen de tu carrito con los subtotal por artículo y un total de toda la compra. En este cart hay un formulario donde al enviar se crea la orden en firebase y con la libreria sweetAlert2 te brinda el id de la orden.

### Elementos usados en el proyecto

-sweetAlert2: esta librería se uso para crear un alert más estético y poder brindarle el id de firebase de la orden al cliente al enviar sus datos.

-Bootstrap: para el css de los componentes.

-Materialize: se uso para las card de los artículos.

