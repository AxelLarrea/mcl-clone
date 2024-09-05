import useGetData from "../../hooks/useGetData";

const Sidebar = ({ categoryName }) => {

    const { data } = useGetData(`https://api.mercadolibre.com/categories/${categoryName}`)
    
    data && console.log('path: ', data)
    return (
        <>
            <aside className="aside-wrapper">

                <div className="aside-category-path">

                </div>

                <div className="aside-search-info">

                </div>

                <div className="aside-toggle-filters">
                    <div className="toggle-filter"></div>
                    <div className="toggle-filter"></div>
                    <div className="toggle-filter"></div>
                    <div className="toggle-filter"></div>
                </div>

                <div className="aside-brand-filter">
                    {/* Cantidad de marcas automática utilizando map, en el array que se reciba */}
                    <a href="#">Mostrar más</a>
                </div>

                <div className="aside-color-filter">
                    {/* Cantidad de colores automática utilizando map, en el array que se reciba */}
                    <a href="#">Mostrar más</a>
                </div>

                <div className="aside-state-filter">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

                <div className="aside-shipment-filter">
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

                <div className="aside-shipment-time-filter">
                    <a href="#"></a>
                </div>

                <div className="aside-price-range-filter">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <div className="price-range-input-wrapper">
                        <div className="min-input">
                            <input type="text" className="price-range-input" placeholder="Mínimo"/>
                            {/* Para hacer la línea que separa ambos inputs, usar :after */}
                        </div>
                        <input type="text" className="price-range-input" placeholder="Máximo"/>
                        <button className="price-range-apply-btn">Go</button>
                    </div>
                </div>

                <div className="aside-payments-filter">
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

                <div className="aside-discounts-filter">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

                <div className="aside-promotion-type">
                    <a href="#">Oferta del día</a>
                </div>

                <div className="aside-official-store">
                    <a href="#">Solo tiendas oficiales</a>
                </div>

                <div className="aside-ubication-filter">
                    {/* Generar en base a un array */}
                    <a href="#">Mostrar más</a>
                </div>

                {/* Faltan filtros que deben ser generados en base al tipo de producto */}

                <div className="aside-bestsellers">
                    <a href="#">Mejores vendedores</a>
                </div>

                <div className="aside-other-searches">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>

                <div className="aside-mercadoshops">
                    <div className="logo">

                    </div>

                    <div className="title">

                    </div>

                    <div className="shops-wrapper">
                        {/* Generar en base a un array que nos de el producto si hay*/}
                        <div className="shop-item"></div>
                    </div>

                </div>

            </aside>
        </>
    );
}
 
export default Sidebar;