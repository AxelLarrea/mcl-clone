import { useState } from 'react';



const img_data = [
    'https://http2.mlstatic.com/D_NQ_777684-MLA77436518502_072024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_949748-MLA78188815567_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_788082-MLA78197452999_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_852335-MLA78213964695_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_708360-MLA77989490762_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_736245-MLA78143696649_082024-OO.webp',
    'https://http2.mlstatic.com/D_NQ_622000-MLA78199185593_082024-OO.webp'
]

const HomeBody = () => {

    const [index, setIndex] = useState(0)

    const handleNext = () => {
        const condition = index === img_data.length-1
        setIndex(condition ? 0 : index + 1)
    }
    
    const handlePrev = () => {
        const condition = index === 0
        setIndex(condition ? img_data.length-1 : index - 1)
    }

    setTimeout(() => handleNext(), 5000)

    return (
        <>
            <div className="carrousel-container">
                <div className="carrousel-item">
                    <img src={img_data[index]} alt="Products ads"/>
                </div>
                
                <button className="carrousel-btn carrousel-prev" onClick={handlePrev}>
                    <span></span>
                </button>

                <button className="carrousel-btn carrousel-next" onClick={handleNext}>
                    <span></span>
                </button>
                
                <div className="carrousel-dots">
                    {   img_data.map( (item, key) => 
                            <span className={`carrousel-dot ${key === index ? "active" : ""}`}></span>
                        )
                    }
                </div>
            </div>
        </>
    );
}
 
export default HomeBody;
