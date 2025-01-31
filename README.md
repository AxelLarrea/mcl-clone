Clon de MercadoLibre
El objetivo de este proyecto es poner en práctica los conocimientos que tengo y continuar aprendendiendo a medida que lo vaya desarrollando.

API urls:
    - Búsqueda por producto: https://api.mercadolibre.com/sites/MLA/search?q=${WORDS}
    - Búsqueda por categoría: https://api.mercadolibre.com/sites/MLA/search?category=%{CATEGORY_ID}
    - Paginado: https://api.mercadolibre.com/sites/MLA/search?q=${WORDS}&limit=${LIMIT}&offset=${OFFSET}
    - Productos de un vendedor: https://api.mercadolibre.com/sites/MLA/search?seller_id=${ID}
    - Descripción de un producto: https://api.mercadolibre.com/items/${ID}/description
    - Preguntas y respuestas de un producto: https://api.mercadolibre.com/questions/search?item_id=${ID}

Objetivos:

  •Básicos:
    - Poder hacer búsquedas de productos.
    - Poder ver el detalle del producto.

  •Luego:
    - Filtrado de productos por orden.
    - Filtrado de productos por Envío Gratis, Envío Internacional, Envío Full, Cuotas con Bajo Interés.
    - Filtrado de productos por rango de precios.
    - Añadir paginado.
    - Deploy.
