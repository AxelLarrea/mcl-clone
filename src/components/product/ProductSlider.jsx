import { useRef, useState } from 'react'

import '../../styles/product/productSlider.css'
const ProductSlider = ({ data, totalCards, title }) => {
    
    const [perAcum, setPerAcum] = useState(0)
    
    const nextBtn = useRef(null)
    const prevBtn = useRef(null)
    const carousel = useRef(null)
    
    const limit = (data.length/totalCards - 1) * 100


    const handleNextClick = () => {
        carousel.current.style.marginLeft = `-${perAcum+100}%`

        setPerAcum((prev) => prev + 100)

        if (perAcum+100 === limit) {
            nextBtn.current.style.visibility = 'hidden'
        } else {
            prevBtn.current.style.visibility = 'visible'
        }
    }

    const handlePrevClick = () => {
        carousel.current.style.marginLeft = `-${perAcum-100}%`

        setPerAcum((prev) => prev - 100)

        if (perAcum-100 === 0) {
            prevBtn.current.style.visibility = 'hidden'
        } else {
            nextBtn.current.style.visibility = 'visible'
        }
    }


    return (
        <section className="similar-products">
            <h2>{title}</h2>
            <div className="product-slider-wrapper" style={{maxWidth: `${(totalCards * 230) + ((totalCards) * 12)}px`}} >
                <div className="product-slider" ref={carousel}>

                    {   data.map((card, index) => (
                            <div key={index} className="slider-card" style={{maxWidth: `${totalCards === 5 ? 228 : 230}px`}}>
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
                <button className={`product-slider-btn ${totalCards === 5 ? 'next-product-btn-large' : 'next-product-btn'}`} onClick={handleNextClick} ref={nextBtn}></button>
            </div>
        </section>
        
    );
}
 
export default ProductSlider;