import { useState } from "react";

import Item from "./Item";
import '../../styles/search/productList.css';
import { useFilterStore } from "../../utils/store";


const ProductList = ({ data }) => {
    const [display, setDisplay] = useState(true)
    const { order, setOrder } = useFilterStore()

    const handleTopProductsClick = () => {
        const optionsList = document.querySelector('.btn-wrapper .options')
        optionsList.style.display = display === true ? 'block' : 'none'
        setDisplay(!display)
    }
    
    const options_text = () => {
        if(order === 'asc') {
            return 'Menor precio'
        } else if(order === 'desc') {
            return 'Mayor precio'
        } else {
            return 'Más relevantes'
        }
    }
    return (
        <>
            <section className="products-wrapper">
                <div className="products-orderby-wrapper">
                    <div className="products-orderby">
                        <span>Ordenar por </span>
                        <div className="btn-wrapper">
                            <button onClick={handleTopProductsClick}>
                                { options_text() }
                                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="rgba(0, 0, 0, 0.9)">
                                    <path stroke="#3483FA" d="M9.35229 3.70447L6.00004 7.05672L2.64779 3.70447L1.85229 4.49996L6.00004 8.64771L10.1478 4.49996L9.35229 3.70447Z" fill="rgba(0, 0, 0, 0.9)">
                                    </path>            
                                </svg>
                            </button>
                            <div className="options">
                                <ul>
                                    <li value="Más relevantes" onClick={() => setOrder(undefined)}>
                                        <span>Más relevantes</span>
                                    </li>
                                    <li value="Menor precio" onClick={() => setOrder('asc')}>
                                        <span>Menor precio</span>
                                    </li>
                                    <li value="Mayor precio" onClick={() => setOrder('desc')}>
                                        <span>Mayor precio</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>


                { data?.map( item => (
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