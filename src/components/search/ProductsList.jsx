import Item from "./Item";
import '../../styles/search/productList.css';


const ProductList = ({ data }) => {

    return (
        <>
            <section className="products-wrapper">
                <div className="products-orderby-wrapper">
                    <div className="products-orderby">
                        <span>Ordenar por: </span>
                        <select>
                            <option value="Más relevantes">Más relevantes</option>
                            <option value="Menor precio">Menor precio</option>
                            <option value="Mayor precio">Mayor precio</option>
                        </select>
                    </div>
                </div>


                { data && data.results.map( item => (
                    <Item 
                        key={item.id}
                        item={item}
                    />
                    ))
                }
            </section>
        </>
    );
}
 
export default ProductList;