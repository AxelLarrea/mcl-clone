Clon de MercadoLibre

APIs:

    - Búsqueda por producto: https://api.mercadolibre.com/sites/MLA/search?q=${WORDS}
    - Búsqueda por categoría: https://api.mercadolibre.com/sites/MLA/search?category=%{CATEGORY_ID}
    - Listado de categorías con IDs: https://api.mercadolibre.com/sites/MLA/categories
    - Infinite scrolling o páginas: https://api.mercadolibre.com/sites/MLA/search?q=${WORDS}&limit=${LIMIT}&offset=${OFFSET}

Objetivos:

  •Básicos:

    - Poder hacer búsquedas de productos.
    - Poder buscar por categoría.
    - Poder ver el detalle del producto.

  •Luego:

    - Añadir infinite scrolling o páginas.
    - Añadir carrito.
    - Añadir pasarela de pago.
    - Deploy.
