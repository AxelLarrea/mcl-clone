import { useState, useEffect } from 'react';
import '../../styles/home/carousel.css'

const img_data = [
    'https://http2.mlstatic.com/D_NQ_977782-MLA78139337685_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_777684-MLA77436518502_072024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_949748-MLA78188815567_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_788082-MLA78197452999_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_852335-MLA78213964695_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_708360-MLA77989490762_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_736245-MLA78143696649_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_622000-MLA78199185593_082024-OO.webp'
]

const Carousel = () => {

    const [index, setIndex] = useState(0)
    const [mouse, setMouse] = useState(false)
    
    const handleNext = () => {
        const condition = index === img_data.length - 1
        setIndex(condition ? 0 : index + 1)

        const size = condition ? 0 : index + 1
        const elem = document.querySelector('.carrousel-imgs')
        elem.style.transform = `translateX(-${size}00%)`

        const btn = document.querySelector('.carrousel-btn.next')
        btn.style.borderTop = '1px solid #3483fa'
        btn.style.borderBottom = '1px solid #3483fa'
        btn.style.borderLeft = '1px solid #3483fa'

        const btn2 = document.querySelector('.carrousel-btn.prev')
        btn2.style.border = 'none'
    }
    
    const handlePrev = () => {
        const condition = index === 0
        setIndex(condition ? img_data.length-1 : index - 1)

        const size = condition ? img_data.length-1 : index - 1
        const elem = document.querySelector('.carrousel-imgs')
        elem.style.transform = `translateX(-${size}00%)`
        
        const btn = document.querySelector('.carrousel-btn.prev')
        btn.style.borderTop = '1px solid #3483fa'
        btn.style.borderBottom = '1px solid #3483fa'
        btn.style.borderRight = '1px solid #3483fa'

        const btn2 = document.querySelector('.carrousel-btn.next')
        btn2.style.border = 'none'
    }
    

    const handleLeave = () => {
        const btn = document.querySelectorAll('.carrousel-btn')
        btn.forEach( btn => btn.style.border = 'none')
        setMouse(false)
    }
    
    const autoPlay = () => {
        const condition = index === img_data.length - 1
        setIndex(condition ? 0 : index + 1)

        const size = condition ? 0 : index + 1
        const elem = document.querySelector('.carrousel-imgs')
        elem.style.transform = `translateX(-${size}00%)`
    }
    
    useEffect(() => {
        if(!mouse) {
            const interval = setInterval(() => {
                autoPlay()
            }, 5000)
            return () => clearInterval(interval)
        }
    })
    
    return ( 
        <div className="carrousel-container" onMouseLeave={handleLeave} onMouseEnter={() => setMouse(true)} >

                <div className="carrousel-imgs">

                    {img_data.map( (item, key) => 
                        <div className="carrousel-item "key={key}>
                            <img src={img_data[key]} alt="Products ads"/>
                        </div>
                        )
                    }

                </div>
                
                <button className="carrousel-btn prev" onClick={handlePrev}>
                    <span></span>
                </button>

                <button className="carrousel-btn next" onClick={handleNext}>
                    <span></span>
                </button>
                
                <div className="carrousel-dots">
                    {   img_data.map( (item, key) => 
                            <span className={`carrousel-dot ${key === index ? "active" : ""}`} key={key}></span>
                        )
                    }
                </div>

            </div>
    );
}
 
export default Carousel;