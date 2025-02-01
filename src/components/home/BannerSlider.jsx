import { useState, useRef} from "react"
import "../../styles/home/bannerSlider.css"

const BannerSlider = ({data, totalCards, title, showLink=false, link, linkText}) => {

    const size = -100
    const [sizeAcum, setSizeAcum] = useState(0)
    const [index, setIndex] = useState(0)
    const carousel = useRef(null)
    const btnRight = useRef(null)
    const btnLeft = useRef(null)
    
    // Array para la cantidad de dots
    const dots = Array.from({ length: Math.ceil(data && data.length/totalCards) }, (v, i) => i);

    const handleNext = () => {
        setIndex(prev => prev+1)

        // Tamaño límite total llegando a mostrar las últimas cards
        const limitSize = (data.length/totalCards - 1) * size
        
        // Actualizamos el tamaño del translate para moverlo a la derecha
        carousel.current.style.marginLeft = `${sizeAcum+size}%`

        // Controlar los botones
        if(sizeAcum+size === limitSize) {
            btnRight.current.style.visibility = 'hidden'
            setSizeAcum(sizeAcum+size)
        } else {
            btnRight.current.style.visibility = 'visible'
            btnLeft.current.style.visibility = 'visible'
            setSizeAcum(sizeAcum+size)
        }
    }
    
    const handlePrev = () => {
        setIndex(prev => prev-1)

        // Actualizamos el tamaño del translate para moverlo a la izquierda
        carousel.current.style.marginLeft = `${sizeAcum-size}%`

        // Controlar los botones
        if(sizeAcum-size === 0) {
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
            <div className="banner-wrapper" style={{maxWidth: `${totalCards*200}px`}}>

                <button className="btn-shortcut left" ref={btnLeft} onClick={handlePrev}></button>

                <button className="btn-shortcut right" ref={btnRight} onClick={handleNext}></button>

                <div className="banner-container">
                    <div className="banner-header">

                        <div>
                            <h3> {title} </h3>

                            { showLink && <a href={link}> { linkText } </a> }
                        </div>

                        <div className="dots-container">

                            {   dots.map( (item, key) => 
                                    <span className={`carrousel-dot ${key === index ? "active" : ""}`} key={key}></span>
                                )
                            }

                        </div>
                    </div>
                    
                    <div className="banner-cards" ref={carousel}> 

                        { data && data.map((card, key) => (
                                <div className="card" key={key}>
                                    <div className='card-img'>
                                        <img src={card?.url || "https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg"}/>
                                    </div>
                                    <div className='card-bottom-rec'>
                                        <span className='article-title'>Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku </span>
                                        <div className='card-bottom-price'>
                                            <span>Precio con descuento</span>
                                            <div className='card-precios'>
                                                <span>$ 23.000</span>
                                                <span>38% OFF</span>
                                            </div>

                                            <span className={`${key%2 === 0 ? "card-cuotas" : ""}`}>Mismo precio en 3 cuotas de $ 3250</span>
                                            <div>
                                                Envío gratis
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
 
export default BannerSlider;