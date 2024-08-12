import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Shortcuts from './Shortcuts';



const cards = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const HomeBody = () => {



    return (
        <>
            <Carousel/>
            <Shortcuts/>

            <div className="inspired-banner-wrapper">

                <button className="btn-shortcut left"></button>

                <button className="btn-shortcut right"></button>

                <div className="inspired-banner-container">
                    
                    <h3> Inspirado en lo último que viste </h3>

                    {   cards.map( (item, key) => 
                            <span className={`carrousel-dot `} key={key}></span>
                        )
                    }

                    {/* Esto es para los dots  ${key === index ? "active" : ""} */}
                    
                    <div className="inspired-banner-cards">

                        {   cards.map((card, index) => (
                                <div className="card" key={index}>
                                    <div className='card-title'>
                                        <h5>Visto recientemente</h5>
                                    </div>
                                    <div className='card-img'>
                                        <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                    </div>
                                    <div className='card-bottom-rec'>
                                        <span className='article-title'>Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku </span>
                                        <div className='card-bottom-price'>
                                            <span>Precio con descuento</span>
                                            <div className='card-precios'>
                                                <span>$23.000</span>
                                                <span>38% off</span>
                                            </div>
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
