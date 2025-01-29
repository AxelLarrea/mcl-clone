import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useGetData from '../../hooks/useGetData';

import SellerProductsSlider from './SellerProductsSlider';
import ProductSpecs from './ProductSpecs';
import ProductSlider from './ProductSlider';
import '../../styles/product/ProductMainBody.css';



const cards = Array.from({ length: 24 }, (v, i) => i);

const ProductMainBody = ({ productData, seller }) => {

    const [pictureInd, setPictureInd] = useState(0)
    const { id } = seller
    const sellerItemsUrl = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`
    const description = `https://api.mercadolibre.com/items/${productData.id}/description`
    const questions = `https://api.mercadolibre.com/questions/search?item_id=${productData.id}`

    const { data } = useQuery({
        queryKey: ['seller', id],
        queryFn: () => useGetData(sellerItemsUrl, null, null, 'seller', null)
    })

    const { data: descriptionData } = useQuery({
        queryKey: ['description', productData.id],
        queryFn: () => useGetData(description, null, null, 'description', null)
    })

    // const { data: questionData } = useQuery({
    //     queryKey: ['questions', productData.id],
    //     queryFn: () => useGetData(questions, null, null, 'questions', null)
    // })

    
    const descripcion = descriptionData?.plain_text.split('\n').filter(descripcion => descripcion !== '')
    

    const activePicture = (index) => {
        setPictureInd(index)

        const thumbnails = document.querySelectorAll('.product-thumbnail-container')

        thumbnails.forEach(thumbnail => thumbnail.style.border = '1px solid rgba(0, 0, 0, 0.25)')
        thumbnails[index].style.border = '2px solid #3483fa';
    }


    const handleShowDescription = () => {
        const descriptionDiv = document.querySelector('.product-description > div')
        const btn = document.querySelectorAll('.see-more-specs-btn')
        
        descriptionDiv.classList.toggle('description-container-hide')
        btn[1].classList.toggle('rotate-see-more-btn')
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

                <a href="#">Ir a la página del vendedor</a>   
            </section>
            
            <hr />

            <ProductSpecs
                specs={productData?.attributes}
            />
            
            <hr />

            <section className="product-description">
                <h2>Descripción</h2>
                
                <div className="description-container-hide">
                    {   descripcion?.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))
                    }
                </div>

                <button className="see-more-specs-btn" onClick={handleShowDescription}>
                    Ver descripción completa
                    <svg fill="#3483fa" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xmlSpace="preserve" stroke="#3483fa">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g> <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
            </section>
            
            <hr />
            
            <section className="similar-products">
                <h2>Quienes vieron este producto también compraron</h2>
                <ProductSlider
                    data={cards}
                    totalCards={3}
                />
            </section>

            <hr />

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

            <hr />
        </div>
    );
}
 
export default ProductMainBody;