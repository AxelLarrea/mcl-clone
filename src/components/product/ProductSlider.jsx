import { useRef, useState } from 'react'

import '../../styles/product/productSlider.css'
const ProductSlider = ({ data, totalCards }) => {
    
    const [index, setIndex] = useState(0)
    const [pxAcum, setPxAcum] = useState(0)

    const nextBtn = useRef(null)
    const prevBtn = useRef(null)
        
    
    const handleNextClick = () => {
        const carousel = document.querySelector('.product-slider')
        const card = document.querySelector('.slider-card')
        
        const pxToTranslate = card?.computedStyleMap().get('width').value * totalCards
        const gap = carousel?.computedStyleMap().get('row-gap').value * totalCards
        const totalPx = pxToTranslate + gap

        setPxAcum((prev) => prev + totalPx)
        carousel.style.marginLeft = `-${pxAcum + totalPx}px`

        if (index < (data.length / totalCards) - 2) {
            setIndex((prev) => prev + 1)
            prevBtn.current.style.visibility = 'visible'

        } else {
            nextBtn.current.style.visibility = 'hidden'
        }
    }

    const handlePrevClick = () => {
        const carousel = document.querySelector('.product-slider')
        const card = document.querySelector('.slider-card')
        
        const pxToTranslate = card?.computedStyleMap().get('width').value * totalCards
        const gap = carousel?.computedStyleMap().get('row-gap').value * totalCards
        const totalPx = pxToTranslate + gap
    
        setPxAcum((prev) => prev - totalPx)
        carousel.style.marginLeft = `-${pxAcum - totalPx}px`

        if (index > 0) {
            setIndex((prev) => prev - 1)
            nextBtn.current.style.visibility = 'visible'

        } else {
            prevBtn.current.style.visibility = 'hidden'
        }
    }

    
    return (
        <div className="product-slider-wrapper" style={{maxWidth: `${(totalCards * 230) + ((totalCards) * 12)}px`}}>
            <div className="product-slider">

                {   data.map((card, index) => (
                        <div key={index} className="slider-card">
                            <div className="slider-img">
                                <img src="https://i.pinimg.com/736x/3c/0c/af/3c0caf15e5791c044dad72d61667049f.jpg" alt="product-image"/>
                            </div>
                            <div className="card-info">
                                <span className="slider-card-original-price">$140.000</span>
                                
                                <div className="slider-card-price">
                                    <span>$109.000</span>
                                    <span>21% OFF</span>
                                </div>
                                
                                <span className="slider-card-installments">en 6 cuotas de $24.600</span>
                                <span className="slider-card-free-shipment">Envío gratis</span>
                                <span className="slider-card-title">Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku </span>
                            </div>
                        </div>
                    ))
                }

            </div>

            <button className="product-slider-btn prev-product-btn" onClick={handlePrevClick} ref={prevBtn}></button>
            <button className="product-slider-btn next-product-btn" onClick={handleNextClick} ref={nextBtn}></button>
        </div>
    );
}
 
export default ProductSlider;