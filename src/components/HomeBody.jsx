import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Shortcuts from './Shortcuts';



const cards = Array.from({ length: 24 }, (v, i) => i);
const dots = Array.from({ length: cards.length/6 }, (v, i) => i);

const HomeBody = () => {

    // useState para guardar y modificar el tamaño del transform size equivale a dos cards
    // ya que necesitamos mostrar dos nuevas cards en el slide.
    const [size] = useState(-100)
    const [sizeAcum, setSizeAcum] = useState(-100)
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        // Array de cards para saber la cantidad
        const cards_array = document.querySelectorAll('.inspired-banner-cards > .card')
        
        // Tamaño límite total llegando a mostrar las últimas cards
        const limitSize = cards_array.length/6 - 1
        
        // Actualizamos el tamaño del translate para moverlo a la derecha
        const carousel = document.querySelector('.inspired-banner-cards')
        carousel.style.marginLeft = `${sizeAcum}%`
        
        // Controlar los botones
        if(sizeAcum === limitSize*-100) {
            const btn = document.querySelector('.inspired-banner-wrapper .btn-shortcut.right')
            btn.style.visibility = 'hidden'
            const btn2 = document.querySelector('.inspired-banner-wrapper .btn-shortcut.left')
            btn2.style.visibility = 'visible'
            setSizeAcum(sizeAcum-size)
        } else {
            setSizeAcum(sizeAcum+size)
        }
        setIndex(index+1)
    }

    const handlePrev = () => {
        // Actualizamos el tamaño del translate para moverlo a la izquierda
        const carousel = document.querySelector('.inspired-banner-cards')
        carousel.style.marginLeft = `${sizeAcum}%`

        // Controlar los botones
        if(sizeAcum === 0) {
            const btn = document.querySelector('.inspired-banner-wrapper .btn-shortcut.right')
            btn.style.visibility = 'visible'
            const btn2 = document.querySelector('.inspired-banner-wrapper .btn-shortcut.left')
            btn2.style.visibility = 'hidden'
            setSizeAcum(sizeAcum+size)
        } else {
            setSizeAcum(sizeAcum-size)
        }
        setIndex(index-1)
    }


    return (
        <>
            <Carousel/>
            <Shortcuts/>

            <div className="inspired-banner-wrapper">

                <button className="btn-shortcut left" onClick={handlePrev}></button>

                <button className="btn-shortcut right" onClick={handleNext}></button>

                <div className="inspired-banner-container">
                    <div className="inspired-banner-header">

                        <h3> Inspirado en lo último que viste </h3>
                        <div className="dots-container">

                            {   dots.map( (item, key) => 
                                    <span className={`carrousel-dot ${key === index ? "active" : ""}`} key={key}></span>
                                )
                            }

                        </div>
                    </div>
                    
                    <div className="inspired-banner-cards">

                        {   cards.map((card, key) => (
                                <div className="card" key={key}>
                                    <div className='card-img'>
                                        <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                    </div>
                                    <div className='card-bottom-rec'>
                                        <span className='article-title'>Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku </span>
                                        <div className='card-bottom-price'>
                                            <span>Precio con descuento</span>
                                            <div className='card-precios'>
                                                <span>$ 23.000</span>
                                                <span>38% off</span>
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
 
export default HomeBody;
