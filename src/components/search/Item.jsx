

const Item = ({ item }) => {
    return (
        <div className="product-wrapper">
            <div className="product-image">
                <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="product-content">
                <div className="product-header">
                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="add-fav-icon">
                        {/* Add favorite icon */}   
                    </div>
                </div>

                <div className="official-store">
                    <span></span>
                </div>

                <div className="product-price-rating-wrapper">
                    <div className="product-price">
                        <h3>${item.price}</h3>
                    </div>

                    <div className="product-rating-colors">

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Item;
