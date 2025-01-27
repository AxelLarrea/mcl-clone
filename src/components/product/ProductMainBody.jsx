import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SellerProductsSlider from './SellerProductsSlider';
import useGetData from '../../hooks/useGetData';
import '../../styles/product/ProductMainBody.css';


const ProductMainBody = ({ productData, seller }) => {

    const [pictureInd, setPictureInd] = useState(0)
    const { id } = seller
    const sellerItemsUrl = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`

    const { data } = useQuery({
        queryKey: ['seller', id],
        queryFn: () => useGetData(sellerItemsUrl, null, null, 'seller', null)
    })

 
    const activePicture = (index) => {
        setPictureInd(index)

        const thumbnails = document.querySelectorAll('.product-thumbnail-container')

        thumbnails.forEach(thumbnail => thumbnail.style.border = '1px solid rgba(0, 0, 0, 0.25)')
        thumbnails[index].style.border = '2px solid #3483fa';
    }



    return (
        <div className="product-main">
            <section className="product-pictures">
                
                <div className="product-main-thumbnails">
                    {   productData?.pictures.map((image, index) => (
                            <div className="product-thumbnail-container" key={index}>
                                <img  
                                    src={image.secure_url} 
                                    alt="side product image"
                                    onMouseEnter={() => activePicture(index)}
                                />
                            </div>
                        ))
                    }
                </div>
                
                <div className="product-main-image">
                    <img src={ productData?.pictures[pictureInd].secure_url } alt="main product image"/>
                </div>

            </section>

            <section className="seller-products">
                <h2>Publicaciones del vendedor</h2>
                
                <SellerProductsSlider
                    sellerItems={data?.results}
                />

                <button className="see-more-specs-btn">
                    Ir a la página del vendedor
                    {/* svg */}
                </button>
            </section>
                        
            <section className="product-specs">
                <h2>Características del producto</h2>
                <div className="specs-wrapper">
                    {/* {   productData?.specs.map((spec, index) => (
                        <div key={index} className="spec">
                            <div className="spec-title">{spec.name}</div>
                            <div className="spec-value">{spec.value_name}</div>
                        </div>
                    // ))} */}
                </div>
                <button className="see-more-specs-btn">
                    Ver todas las caracteristicas
                    {/* svg */}
                </button>
            </section>
            
            <section className="product-description">
                <h2>Descripción</h2>
                <p> Le texto </p>
                <button className="see-more-specs-btn">
                    Ver descripción completa
                    {/* svg */}
                </button>
            </section>
            
            <section className="product-questions">
                <h2>Preguntas</h2>
                <section className="product-questions-to-know">
                    <div className="questions-to-know">Costo y tiempo de envío</div>
                    <div className="questions-to-know">Devoluciones gratis</div>
                    <div className="questions-to-know">Medios de pago y promociones</div>
                    <div className="questions-to-know">Garantía</div>
                    <div className="questions-to-know">Cuotas sin tarjeta</div>
                </section>

                <section className="product-questions-doubts">
                    <div className="questions-doubts">
                        <span>¿Tenés dudas?</span>
                        <span>X</span>
                    </div>
                    <span>Estos atajos te ayudarán a encontrar lo que buscás.</span>
                </section>
                
                <section className="make-a-question">
                    <form>
                        <input type="text" name="make-cuestion" placeholder="Escribí tu pregunta..." />
                        <button>Preguntar</button>
                    </form>
                </section>

                <section className="questions-n-answers">
                    <h3>Últimas realizadas</h3>

                    <div className="question-container">
                        <div className="question">
                            <span>La pregunta en cuestión</span>
                        </div>

                        <div className="answer">
                            <span>Respuesta de la pregunta</span>
                        </div>

                    </div>

                    <button className="see-more-specs-btn">
                        Ver todas las preguntas
                        {/* svg */}
                    </button>
                </section>

            </section>

        </div>
    );
}
 
export default ProductMainBody;