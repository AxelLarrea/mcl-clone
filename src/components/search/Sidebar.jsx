import useGetData from "../../hooks/useGetData";
import "../../styles/search/sidebar.css"


const cant = Array.from({ length: 9 }, (v, i) => i);

const Sidebar = ({ categoryName, totalResults, query, filters }) => {

    const { data } = useGetData(`https://api.mercadolibre.com/categories/${categoryName}`)
    const marca = filters.find(filter => filter.id === 'BRAND')
    const color = filters.find(filter => filter.id === 'KEYBOARD_COLOR')
    // const colores2 = filters.find(filter => filter.id.includes('COLOR'))

    const condicion = filters.find(filter => filter.id === 'ITEM_CONDITION')
    const envio = filters.find(filter => filter.id === 'shipping')
    const price = filters.find(filter => filter.id === 'price')
    const cuota = filters.find(filter => filter.id === 'installments')
    const descuento = filters.find(filter => filter.id === 'discount')
    const oferta_dia = filters.find(filter => filter.id === 'promotion_type')
    const ubicacion = filters.find(filter => filter.id === 'state')
    const tienda_oficial = filters.find(filter => filter.id === 'official_store')
    const bestseller = filters.find(filter => filter.id === 'power_seller')

    
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
                
                {/* Toggle filters */}
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
                
                {/* Brand filters */}
                <div className="aside-brand-filter aside-filter">
                    <span>Marca</span>

                    { filters && cant.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${marca.values[index].name}`} </span>
                                    <span> {`(${marca.values[index].results})`} </span>
                                </a>
                            </div>
                        ))
                    }

                    <a href="#">Mostrar más</a>
                </div>
                
                {/* Color filters */}
                <div className="aside-color-filter aside-filter">
                    <span>Color del teclado</span>

                    { filters && cant.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${color.values[index].name}`} </span>
                                    <span> {`(${color.values[index].results})`} </span>
                                </a>
                            </div>
                        ))
                    }
                    
                    <a href="#">Mostrar más</a>
                </div>
                
                {/* Condition filters */}
                <div className="aside-state-filter aside-filter">
                    <span>Condición</span>

                    { filters && condicion.values.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${item.name}`} </span>
                                    <span> {`(${item.results})`} </span>
                                </a>
                            </div>
                        ))
                    }
                </div>

                {/* Shipping filters */}
                <div className="aside-shipment-filter aside-filter">
                    <span>Envío</span>

                    { filters && envio.values.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${item.name}`} </span>
                                    <span> {`(${item.results})`} </span>
                                </a>
                            </div>
                        ))
                    }
                </div>
                
                {/* Price range filters */}
                <div className="aside-price-range-filter aside-filter">
                    <span>Precio</span>

                    { filters && price.values.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${item.name}`} </span>
                                    <span> {`(${item.results})`} </span>
                                </a>
                            </div>
                        ))
                    }


                    <div className="price-range-input-wrapper">
                        <div className="min-input">
                            <input type="text" className="price-range-input" placeholder="Mínimo"/>
                            {/* Para hacer la línea que separa ambos inputs, usar :after */}
                        </div>
                        <input type="text" className="price-range-input" placeholder="Máximo"/>
                        <button className="price-range-apply-btn">Go</button>
                    </div>
                </div>
                
                {/* Installments filters */}
                <div className="aside-installments-filter aside-filter">
                    <span>Cuotas</span>

                    { filters && cuota.values.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${item.name}`} </span>
                                    <span> {`(${item.results})`} </span>
                                </a>
                            </div>
                        ))
                    }
                </div>
                
                {/* Discount filters */}
                <div className="aside-discounts-filter aside-filter">
                    <span>Descuentos</span>

                    { filters && descuento.values.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${item.name}`} </span>
                                    <span> {`(${item.results})`} </span>
                                </a>
                            </div>
                        ))
                    }
                </div>
                
                {/* Promotion type filters */}
                <div className="aside-promotion-type aside-filter">
                    <span>Tipo de promoción</span>
                    { filters && 
                        <a href="#">  
                            <span> {`${oferta_dia.values[0].name}`} </span>  
                            <span> {`(${oferta_dia.values[0].results})`} </span>
                        </a>
                    }
                </div>
                
                {/* Ubication filters */}
                <div className="aside-ubication-filter aside-filter">
                    <span>Ubicación</span>

                    { filters && cant.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${ubicacion.values[index].name}`} </span>
                                    <span> {`(${ubicacion.values[index].results})`} </span>
                                </a>
                            </div>
                        ))
                    }
                    <a href="#">Mostrar más</a>
                </div>

                {/* Official store filters */}
                <div className="aside-official-store aside-filter">
                    <span>Tiendas oficiales</span>

                    { filters && 
                        <div className="filter-option">
                            <a href="#">
                                <span> {`${tienda_oficial.values[0].name}`} </span>
                                <span> {`(${tienda_oficial.values[0].results})`} </span>
                            </a>
                        </div>
                    }
                </div>
                

                {/* Faltan filtros que deben ser generados en base al tipo de producto */}
                
                {/* Bestsellers filters */}
                <div className="aside-bestsellers aside-filter">
                    <span>Detalles de la publicación</span>

                    { filters && 
                        <div className="filter-option">
                            <a href="#">
                                <span> {`${bestseller.values[0].name}`} </span>
                                <span> {`(${bestseller.values[0].results})`} </span>
                            </a>
                        </div>
                    }
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