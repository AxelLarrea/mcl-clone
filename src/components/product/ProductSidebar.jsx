import '../../styles/product/productSidebar.css';
const ProductSidebar = ({ productData }) => {

    const { title, price, original_price, installments } = productData;
    const discount = (1 - (price / Math.round(original_price))) * 100

    return (
        <aside className="product-content-sidebar">

            <div className="product-sidebar-wrapper">

                {/* Product buy info */}
                <section className="product-sidebar-info">

                    <div className="product-sidebar-top">
                        <div className="product-sidebar-header">
                            <span>Nuevo  |  2 vendidos </span>
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
                                <span> el viernes??? </span> {/* Ver si puede ser dinámico la fecha estimada de llegada */}
                            </div>
                            <a href="#"> Más formas de entrega </a>
                        </div> 

                        <div className="shipment-info">
                            <div className="shipment-text">
                                <span> Retirá gratis </span>
                                <span> a partir del viernes??? en correos y otros puntos </span>
                            </div>
                            <a href="#"> Ver en el mapa </a>
                        </div>
                    </div>

                    <div className="product-sidebar-stock">
                        <span>Stock disponible</span>
                        
                        <div className="stock-status">
                            <span>Cantidad: </span>
                            <span> 1 unidad </span> {/* Para la flechita er si conviene un svg o dibujarlo con :after */}
                            <span> (2 disponible) </span>
                        </div>

                    </div>

                    <div className="product-sidebar-buy">
                        <button> Comprar ahora </button>
                        <button> Agregar al carrito </button>
                    </div>
                    
                    <div className="product-sidebar-seller">

                        <div className="seller-info">
                            <span> Vendido por </span>
                            <a href="#"> Tech </a>
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
                            <span> Devolución gratis. </span>
                            <span> Tenés 30 días desde que lo recibís. </span>
                        </div>

                        <div className="buy-benefits">
                            {/* SVG */}
                            <span> Compra Protegida, </span>
                            <span> recibí el producto que esperabas o te devolvemos tu dinero. </span>
                        </div>
                    </div>

                    <div className="product-sidebar-add-list">
                        <button>
                            <span> Agregar a una lista </span>
                            {/* SVG */}
                        </button>
                    </div>

                </section>
                
                {/* Seller info */}
                <section className="product-sidebar-info">

                    <div className="header-seller-info">

                        <div className="seller-img">
                            <img src="#" alt="seller-logo" />
                        </div>

                        <div className="seller-name"></div>
                            <h3>Seller name</h3>
                            <span> +100 seguidores </span>
                            <span> +100 productos </span>
                        <div></div>

                    </div>

                    <div className="seller-rating-info">
                        
                        <div className="seller-status">
                            <span> MercadoLíder Platinum </span>
                            <span> ¡Uno de los mejores del sitio! </span>
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

                        <div className="seller-status info">
                            <div>
                                <span> +5mil </span>
                                <span> Ventas concretadas </span>
                            </div>

                            <div>
                                {/* SVG */}
                                <span> Brinda buena atención </span>
                            </div>

                            <div>
                                {/* SVG */}
                                <span> Despacha sus productos a tiempo </span>
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

                        </div>
                    </div>

                    <div className="product-payment-methods">
                        <span> Tarjetas de crédito </span>
                        <div className="payment-methods-imgs">
                            
                        </div>
                    </div>
                    
                    <div className="product-payment-methods">
                        <span> Tarjetas de débito </span>
                        <div className="payment-methods-imgs">
                            
                        </div>
                    </div>

                    <div className="product-payment-methods">
                        <span> Efectivo </span>
                        <div className="payment-methods-imgs">
                            
                        </div>
                    </div>
                    
                    <a href="#"> Conocé otros medios de pago </a>
                </section>
            </div>

        </aside>
    );
}
 
export default ProductSidebar;