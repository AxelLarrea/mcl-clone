import { useEffect, useState } from 'react';
import Carousel from './Carousel';





const HomeBody = () => {

    const [index, setIndex] = useState(7)

    const handleNext = () => {

        // Array de cards para saber la cantidad
        const cards_array = document.querySelectorAll('.cards-container .card')
        
        const card = document.querySelector('.card')
        const carousel = document.querySelector('.cards-container')

        const styles = getComputedStyle(carousel);
        const size = -((card.scrollWidth * 2)  + Number(styles.gap.slice(0, -2)) * 2)

        // Size actual en el translateX
        const actualSize = Number(styles.transform.split(' ')[4].slice(0, -1))

        // // Actualizamos el tamaño del translate para moverlo a la derecha
        carousel.style.transform = `translateX(${actualSize+size}px)`
        

    

        // Controlar los botones
        console.log(index)
        if(index === cards_array.length - 1) {
            const btn = document.querySelector('.btn-shortcut.right')
            btn.style.opacity = 0
            const btn2 = document.querySelector('.btn-shortcut.left')
            btn2.style.opacity = 1
            setIndex(index-2)
        } 
        setIndex(index+2)
    }


    const handlePrev = () => {

        const card = document.querySelector('.card')
        const carousel = document.querySelector('.cards-container')

        const styles = getComputedStyle(carousel);

        // Tamaño de dos cards 
        const size = (card.scrollWidth * 2)  + Number(styles.gap.slice(0, -2)) * 2

        // Size actual en el translateX
        const actualSize = Number(styles.transform.split(' ')[4].slice(0, -1))
        console.log(size)
        console.log(actualSize)
        
        // Sumar el tamaño de las dos cards al actualSize para moverlo a la izquierda
        const condition = actualSize+size > 0
        condition ? carousel.style.transform = `translateX(-${actualSize+size}px)` : carousel.style.transform = `translateX(${actualSize+size}px)`

        // Controlar los botones
        console.log(index)
        if(index === 9) {
            const btn = document.querySelector('.btn-shortcut.right')
            btn.style.opacity = 1
            const btn2 = document.querySelector('.btn-shortcut.left')
            btn2.style.opacity = 0
            setIndex(index+2)
        }
        setIndex(index-2)
    }


    return (
        <>
            <Carousel/>

            <div className="shortcuts-container">
                

                <div className="shortcuts-wrapper">

                    <button className='btn-shortcut left' onClick={handlePrev}>
                    </button>
                    
                    <button className='btn-shortcut right' onClick={handleNext}>
                    </button>

                    <div className="shortcuts">

                        <div className="cards-container">

                            <div className="card">
                                <div>1</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>2</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>3</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>4</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>5</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>6</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>7</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>8</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>7</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>

                            <div className="card">
                                <div>8</div>
                                <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    );
}
 
export default HomeBody;
