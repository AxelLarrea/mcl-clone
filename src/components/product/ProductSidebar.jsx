import '../../styles/product/productSidebar.css';

const cant = Array.from( { length: 5}, (v, i) => i)
const ProductSidebar = ({ productData }) => {

    const { title, price, original_price, installments, seller, condition } = productData;
    const discount = (1 - (price / Math.round(original_price))) * 100
    const productCondition = condition === "new" ? "Nuevo" : "Usado";

    const handleShowQuantityModal = () => {
        const svg = document.querySelector('.stock-status');
        const modal = document.querySelector('.select-quantity');
        svg.classList.toggle('rotate-stock-svg')
        modal.classList.toggle('show-modal');
    }

    const handleSelectQuantity = (index) => {
        const quantity = document.querySelectorAll('.select-quantity ul li');

        quantity.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active-quantity');
            } else {
                item.classList.remove('active-quantity');
            }
        })
    }   

    return (
        <aside className="product-content-sidebar">

            <div className="product-sidebar-wrapper">

                {/* Product buy info */}
                <section className="product-sidebar-info">

                    <div className="product-sidebar-top">
                        <div className="product-sidebar-header">
                            <span>{ productCondition }  |  2 vendidos </span>
                            <div className="add-fav-icon-sidebar" >
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3483FA" >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#3483FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                        </path> 
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <h1> { title } </h1>    
                    </div>

                    <div className="product-sidebar-price">
                        {   original_price &&
                            <span>$ { Math.round(original_price).toLocaleString("es-AR", {
                                maximumFractionDigits: "0"
                                }) }
                            </span>
                        }

                        <div className="price-info">
                            <h2>$ { price?.toLocaleString("es-AR", {
                                    maximumFractionDigits: "0"
                                    })}
                            </h2>

                            { original_price && <span>{ Math.trunc(discount) }% OFF</span> }
                        </div>

                        {   installments?.quantity > 1 && 
                            <span> Mismo precio en {installments.quantity} cuotas de $ {installments.amount.toLocaleString("es-AR")}
                            </span> 
                        }
                        
                        <div className="see-payments-methods">
                            <a href="#"> Ver los medios de pago </a>
                        </div>

                    </div>
                    
                    <div className="product-sidebar-shipment">
                        <div className="shipment-info">
                            <div className="shipment-text">
                                <span> Llega gratis </span>
                                <span> el viernes </span> {/* Ver si puede ser dinámico la fecha estimada de llegada */}
                            </div>
                            <a href="#"> Más formas de entrega </a>
                        </div> 

                        <div className="shipment-info">
                            <div className="shipment-text">
                                <span> Retirá gratis </span>
                                <span> a partir del viernes en correos y otros puntos </span>
                            </div>
                            <a href="#"> Ver en el mapa </a>
                        </div>
                    </div>

                    <div className="product-sidebar-stock">
                        <span>Stock disponible</span>
                        
                        <div className="stock-status" onClick={handleShowQuantityModal}>
                            <span>Cantidad: </span>
                            <span> 1 unidad </span>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58.5 37.3" enableBackground="new 0 0 58.5 37.3" xmlSpace="preserve">
                                <path fillRule="evenodd" clipRule="evenodd" fill="#3483FA" d="M54.7,26.3L32.5,4.2c-2-1.9-5-1.9-6.9,0L3.4,26.3
                                    c-2,2-2.4,4.8-0.4,6.7l0.8,0.9c1.7,1.6,3.9,1.9,5.4,0.2c5.5-5.5,11-10.8,16.5-16.3c1.8-2,4.9-2,6.9,0c5.5,5.5,10.9,10.8,16.3,16.3
                                    c1.7,1.7,3.7,1.4,5.5-0.2l0.7-0.9C57.1,31.1,56.7,28.3,54.7,26.3L54.7,26.3z">
                                </path>
                            </svg>
                            <span> (2 disponible) </span>

                            <div className="select-quantity">
                                <ul>
                                    {   cant.map((value, i) => (
                                            <li 
                                                key={ i } 
                                                onClick={ () => handleSelectQuantity(value) }
                                                className={ i === 0 ? 'active-quantity' : '' }
                                            > 
                                                { value + 1 } { value === 0 ? 'unidad' : 'unidades' } 
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>


                    </div>

                    <div className="product-sidebar-buy">
                        <button> Comprar ahora </button>
                        <button> Agregar al carrito </button>
                    </div>
                    
                    <div className="product-sidebar-seller">

                        <div className="seller-info">
                            <span> Vendido por </span>
                            <a href="#"> { seller.nickname } </a>
                        </div>

                        <div className="seller-info">
                            <span> MercadoLíder </span>
                            <span> | </span>
                            <span> +5mil ventas </span>
                        </div>
                    </div>

                    <div className="product-sidebar-buy-benefits">
                        <div className="buy-benefits">
                            {/* SVG */}
                            <div className="buy-benefits-icon">
                                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(180)">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M474.89,300.41a121.43,121.43,0,0,1-121.3,121.3H247.08V392.13H353.59a91.72,91.72,0,1,0,0-183.44H87.53L151,272.2l-20.92,20.92L30.89,193.9l99.22-99.22L151,115.6l-63.5,63.51H353.59A121.43,121.43,0,0,1,474.89,300.41Z"></path>
                                    </g>
                                </svg>                            
                            </div>

                            <div>
                                <a href="#"> Devolución gratis. </a>
                                <span> Tenés 30 días desde que lo recibís. </span>
                            </div>
                        </div>

                        <div className="buy-benefits">
                            <div className="buy-benefits-icon">
                                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M16.53 9.78a.75.75 0 00-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5-5z"></path>
                                        <path fillRule="evenodd" d="M12.54.637a1.75 1.75 0 00-1.08 0L3.21 3.312A1.75 1.75 0 002 4.976V10c0 6.19 3.77 10.705 9.401 12.83.386.145.812.145 1.198 0C18.229 20.704 22 16.19 22 10V4.976c0-.759-.49-1.43-1.21-1.664L12.54.637zm-.617 1.426a.25.25 0 01.154 0l8.25 2.676a.25.25 0 01.173.237V10c0 5.461-3.28 9.483-8.43 11.426a.2.2 0 01-.14 0C6.78 19.483 3.5 15.46 3.5 10V4.976c0-.108.069-.203.173-.237l8.25-2.676z"></path>
                                    </g>
                                </svg>
                            </div>

                            <div>
                                <a href="#"> Compra Protegida, </a>
                                <span> recibí el producto que esperabas o te devolvemos tu dinero. </span>
                            </div>
                        </div>
                    </div>

                    <div className="product-sidebar-add-list">
                        <button>
                            <span> Agregar a una lista </span>
                            <svg fill="#3483fa" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xmlSpace="preserve" stroke="#3483fa">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <g> <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"></path>  
                                    </g> 
                                </g>
                            </svg>         
                        </button>
                    </div>

                </section>
                
                {/* Seller info */}
                <section className="product-sidebar-info">

                    <div className="header-seller-info">

                        <div className="seller-img">
                            <img src="https://i.pinimg.com/736x/44/fb/07/44fb07bf3b34ad79ce91577dd25202d9.jpg" alt="seller-logo" />
                        </div>

                        <div className="seller-name">
                            <h3>{ seller.nickname }</h3>
                            <div>
                                <span> +100 </span>
                                <span> Seguidores </span>
                                <span> +100 </span>
                                <span> Productos </span>
                            </div>
                        </div>

                        <div className="seller-follow">
                            <button> Seguir </button>
                        </div>

                    </div>

                    <div className="seller-rating-info">
                        
                        <div className="seller-status">
                            <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg" alt="medal"/>
                            <div className="seller-status-text">
                                <span> MercadoLíder Platinum </span>
                                <span> ¡Uno de los mejores del sitio! </span>
                            </div>
                        </div>

                        <div className="seller-rating-thermometer">
                            <ul>
                                <li className="thermometer-level t-level1"></li>
                                <li className="thermometer-level t-level2"></li>
                                <li className="thermometer-level t-level3"></li>
                                <li className="thermometer-level t-level4"></li>
                                <li className="thermometer-level t-level5"></li>
                            </ul>
                        </div>

                        <div className="seller-status-info">
                            <div className="seller-status-block">
                                <h5>+5mil </h5>
                                <span>Ventas concretadas </span>
                            </div>

                            <div className="seller-status-block">
                                <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive-v2.svg" alt="message-positive" />
                                <span>Brinda buena atención </span>
                            </div>

                            <div className="seller-status-block">
                                <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive-v2.svg" alt="time-positive" />
                                <span>Despacha sus productos a tiempo </span>
                            </div>
                        </div>
                        
                    </div>

                    <button className="footer-seller-page">
                        Ir a la página del vendedor
                    </button>

                </section>
                
                {/* Payment methods */}
                <section className="product-sidebar-info">

                    <h3> Medios de pago </h3>

                    <div className="product-payment-methods">
                        <span> Cuotas sin Tarjeta </span>
                        <div className="payment-methods-imgs">
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/b4534650-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="Mercadopago"/>
                        </div>
                    </div>

                    <div className="product-payment-methods">
                        <span> Tarjetas de crédito </span>
                        <div className="payment-methods-imgs">
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa"/>
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/b4785730-c13f-11ee-b4b3-bb9a23b70639-m.svg" alt="American Express"/>
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="Mastercard"/>
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/ca059a50-0f95-11ea-bc46-0785c501feb7-m.svg" alt="Naranja"/>
                        </div>
                    </div>
                    
                    <div className="product-payment-methods">
                        <span> Tarjetas de débito </span>
                        <div className="payment-methods-imgs">
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" alt="Visa Débito"/>
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" alt="Maestro"/>
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" alt="Cabal Débito"/>
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="Mastercard Débito"/>
                        </div>
                    </div>

                    <div className="product-payment-methods">
                        <span> Efectivo </span>
                        <div className="payment-methods-imgs">
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" alt="Pago Fácil"/>
                            <img src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" alt="Rapipago" />
                        </div>
                    </div>
                    
                    <div className="product-payment-methods-link">
                        <a href="#"> Conocé otros medios de pago </a>
                    </div>
                </section>
            </div>
            
            <hr/>
        </aside>
    );
}
 
export default ProductSidebar;