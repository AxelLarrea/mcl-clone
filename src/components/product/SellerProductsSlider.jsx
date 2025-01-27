import { useState } from 'react';
import '../../styles/product/sellerProductSlider.css';

const items = Array.from( {length: 10 }, (v, i) => i)

const SellerProductsSlider = ({ sellerItems }) => {

    const [index, setIndex] = useState(0)
    const [pxAcum, setPxAcum] = useState(0)

    const nextBtn = document.querySelector('.next-btn')
    const prevBtn = document.querySelector('.prev-btn')

    

    const handleNextClick = () => {
        const carousel = document.querySelector('.seller-products-slider')
        const card = document.querySelector('.seller-product-card')
        
        // Obtenemos el ancho de la card y el gap entre las cards, y multiplicamos por dos, ya que solo vemos de a dos cards
        const pxToTranslate = card?.computedStyleMap().get('width').value * 2
        const gap = carousel?.computedStyleMap().get('row-gap').value * 2
        const totalPx = pxToTranslate + gap

        // Aplicamos margin para mover el slide hacia las siguientes cards
        setPxAcum((prev) => prev + totalPx)
        carousel.style.marginLeft = `-${pxAcum + totalPx}px`

        // Si el index es menor a la mitad de la cantidad de cards menos 2, sumamos 1 al index y mostramos el botón previo, caso contrario, ocultamos el botón siguiente
        if (index < (sellerItems.slice(0, 10).length / 2) - 2) {
            setIndex((prev) => prev + 1)
            prevBtn.style.visibility = 'visible'

        } else {
            nextBtn.style.visibility = 'hidden'
        }
    }

    const handlePrevClick = () => {
        const carousel = document.querySelector('.seller-products-slider')
        const card = document.querySelector('.seller-product-card')
        
        // Obtenemos el ancho de la card y el gap entre las cards, y multiplicamos por dos, ya que solo vemos de a dos cards
        const pxToTranslate = card?.computedStyleMap().get('width').value * 2
        const gap = carousel?.computedStyleMap().get('row-gap').value * 2
        const totalPx = pxToTranslate + gap

        // Aplicamos margin para mover el slide hacia las anteriores cards
        setPxAcum((prev) => prev - totalPx)
        carousel.style.marginLeft = `-${pxAcum - totalPx}px`

        // Si el index es mayor a 0, restamos 1 al index y mostramos el botón siguiente, caso contrario, ocultamos el botón previo
        if (index > 0) {
            setIndex((prev) => prev - 1)
            nextBtn.style.visibility = 'visible'

        } else {
            prevBtn.style.visibility = 'hidden'
        }
    }


    return (  
        <div className="seller-products-slider-wrapper">
            
            <div className="seller-products-slider">

                {
                    sellerItems?.slice(0, 10).map((item, index) => (
                        <div className="seller-product-card" key={item.id}>
                            <div className="seller-product-image">
                                <img src={item.thumbnail} alt="product"/>
                            </div>
                            <div className="seller-product-info">
                                {/* Título */}
                                <span className="seller-product-title">{ item.title }</span>
                                
                                {/* Precio original */}
                                { item.original_price && 
                                    <span className="seller-original-price">
                                        $ { item.original_price.toLocaleString(
                                            'es-AR', 
                                            { maximumFractionDigits: '0' }) 
                                        }
                                    </span> 
                                }
                                
                                <div className="current-price-wrapper">

                                    {/* Precio actual */}
                                    <span>  
                                        $ { item.price.toLocaleString(
                                            'es-AR', 
                                            { maximumFractionDigits: '0' }
                                        )}
                                    </span>
                                    
                                    {/* Descuento */}
                                    { item.original_price && <span>{ Math.trunc((1 - (item.price / Math.round(item.original_price))) * 100) }% OFF</span> }
                                </div>
                                
                                {/* Cuotas */}
                                { item.installments && 
                                    <span>{`${item.installments.quantity} cuotas de $ ${item.installments.amount.toLocaleString("es-AR", {maximumFractionDigits: '0'})}`}</span> }

                                {/* Envío gratis */}
                                { item.shipping.free_shipping && <span className="free-shipment">Envío gratis</span> }
                            </div>
                        </div>
                    ))
                }

            </div>

            <button className="slider-btn prev-btn" onClick={handlePrevClick}></button>
            <button className="slider-btn next-btn" onClick={handleNextClick}></button>
        </div>
    );
}
 
export default SellerProductsSlider;