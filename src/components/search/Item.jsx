import '../../styles/search/searchItem.css';

const Item = ({ item }) => {

    const discount = (1 - (item.price / Math.round(item.original_price))) * 100

    return (
        <div className="product-wrapper">
            <div className="product-image">
                <img src={ item.thumbnail } alt={ item.title } />
            </div>
            
            <div className="add-fav-icon">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3483FA">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#3483FA" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
                        </path> 
                    </g>
                </svg>
            </div>

            <div className="product-content">

                <div className="product-header">
                    <div className="brand">
                        { item.sale_price.metadata.promotion_type === "deal_of_the_day" && <span>OFERTA DEL DÍA</span> }
                        <span>{ item.attributes[0].value_name.toUpperCase() }</span>
                    </div>

                    <div className="title">
                        <h2>{ item.title }</h2>
                    </div>
                    
                </div>

                <div className="official-store">
                    <span> Por { item.official_store_name }</span>
                </div>

                <div className="product-price-rating-wrapper">
                    <div className="product-price">
                        <span>{ Math.round(item.original_price).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD"
                            }) }
                        </span>
                        
                        <div>
                            <h3>{ item.price.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }) }
                            </h3>

                            <span>{ Math.trunc(discount) }% OFF</span>
                        </div>
                    </div>

                    <div className="product-rating-colors">

                    </div>
                </div>
                
                <div className="product-shipment">
                    { item.shipping.free_shipping && <span>Envío gratis</span> }
                    { item.shipping.logistic_type === "fulfillment" && <span>Enviado por <span>FULL</span></span> }
                </div>

            </div>
        </div>
    );
}
 
export default Item;
