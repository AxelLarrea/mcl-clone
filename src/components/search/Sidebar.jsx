import useGetData from "../../hooks/useGetData";
import "../../styles/search/sidebar.css"


const Sidebar = ({ categoryName, totalResults, query }) => {

    const { data } = useGetData(`https://api.mercadolibre.com/categories/${categoryName}`)
    

    return (
        <>
            <aside className="aside-wrapper">

                <div className="aside-category-path">
                    <ul>
                        {data &&
                            data.path_from_root.map((item, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <span> {item.name} </span>
                                    </a>

                                    <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.43200000000000005"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                            <path d="M10 7L15 12L10 17" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                            </path> 
                                        </g>
                                    </svg>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="aside-search-info">
                    <h2>{ query[0].toUpperCase() + query.slice(1) }</h2>
                    <span>{ totalResults } resultados</span>
                </div>

                <div className="aside-toggle-filters">
                    <div className="toggle-filter">
                        <div className="text">
                            <span>Llega mañana</span>
                        </div>
                        <input type="checkbox"/>
                    </div>

                    <div className="toggle-filter">
                        <div className="text">
                            <span>FULL te da envío gratis</span>
                            <span>En carritos desde $23.000</span>
                        </div>
                        <input type="checkbox"/>
                    </div>

                    <div className="toggle-filter">
                        <div className="text">
                            <span>Envío gratis</span>
                        </div>
                        <input type="checkbox"/>
                    </div>

                    <div className="toggle-filter">
                        <div className="text">
                            <span>Mejor precio en cuotas</span>
                            <span>Al mismo precio o con bajo interés</span>
                        </div>
                        <input type="checkbox"/>
                    </div>
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