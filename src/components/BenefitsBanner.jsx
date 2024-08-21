import { useState, useRef } from "react";
import '../styles/benefitsBanner.css'

const BenefitsBanner = ({ data, totalCards }) => {

    const [size] = useState(-33)
    const [sizeAcum, setSizeAcum] = useState(0)
    const [index, setIndex] = useState(0)
    const carousel = useRef(null)
    const btnRight = useRef(null)
    const btnLeft = useRef(null)

    const dots = Array.from({ length: Math.ceil(data.length/totalCards) }, (v, i) => i);


    const handleNext = () => {

        setIndex(prev => prev+1)

        // Tamaño límite total llegando a mostrar las últimas cards
        const limitSize = Math.ceil(data.length/totalCards) - 1
        
        // Actualizamos el tamaño del translate para moverlo a la derecha
        carousel.current.style.marginLeft = `${sizeAcum-33}%`

        // Controlar los botones
        if(sizeAcum-33 === (limitSize*-33)) {
            btnRight.current.style.visibility = 'hidden'
            btnLeft.current.style.visibility = 'visible'
            setSizeAcum(sizeAcum+size)
        } else {
            btnRight.current.style.visibility = 'visible'
            setSizeAcum(sizeAcum+size)
        }
    }

    const handlePrev = () => {

        setIndex(prev => prev-1)

        // Actualizamos el tamaño del translate para moverlo a la izquierda
        carousel.current.style.marginLeft = `${sizeAcum+33}%`

        // Controlar los botones
        if(sizeAcum+33 === 0) {
            btnRight.current.style.visibility = 'visible'
            btnLeft.current.style.visibility = 'hidden'
            setSizeAcum(sizeAcum-size)
        } else {
            btnRight.current.style.visibility = 'visible'
            btnLeft.current.style.visibility = 'visible'
            setSizeAcum(sizeAcum-size)
        }
    }

    return (
        <>
            <div className="benefits-banner-wrapper">

                <button className='btn-shortcut left'  onClick={handlePrev} ref={btnLeft}></button>
                <button className='btn-shortcut right' onClick={handleNext} ref={btnRight}></button>

                <div className="banner-header">

                    <div>
                        <h3> Beneficios de mercado puntos </h3>

                        <a href="#"> Ver todos los beneficios</a>
                    </div>

                    <div className="dots-container">

                        {   dots.map( (item, key) => 
                                <span className={`carrousel-dot ${key === index ? "active" : ""}`} key={key}></span>
                            )
                        }

                    </div>
                </div>

                <div className='benefits-banner-cards'>

                    <div className="benefits-cards-container" ref={carousel}>

                        {   data && data.map( (item, key) => (
                                <div className="benefit-card" key={key}>
                                    <img src={item.image} alt="background image" />

                                    <div className={"benefit-partner-wrapper"} style={{ background: `${ key%3  ? "linear-gradient(0deg, #002be7 0%, rgba(0, 43, 231, 0) 100%)" : ""}` }}>
                                        <div className="benefit-partner">
                                            <img src={item.logo} alt="" />
                                            <div className="partner-text">
                                                <span>{ item.firstTex }</span>
                                                <span>{ item.secondText }</span>
                                                <span>{ item.thirdText }</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    
                    </div>

                </div>

            </div>
        </>
    );
}
 
export default BenefitsBanner;