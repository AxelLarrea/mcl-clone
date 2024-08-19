import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Shortcuts from './Shortcuts';
import BannerSlider from './BannerSlider';
import ThreeCategories from './ThreeCategories';


// Cards para el componente bannerSlider
const cards = Array.from({ length: 24 }, (v, i) => i);

const HomeBody = () => {

    return (
        <>
            <Carousel/>
            <Shortcuts/>
            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Inspirado en lo último que viste"}
            />
            
            <div className="subscribe-wrapper">
                <div className='subscribe-header'>
                    <div className='subscribe-text'>
                        <span>Suscribite al Nivel 6 con precio de promoción</span>
                        <span>$ 5.999</span>
                        <span>$ 1.999/mes</span>
                    </div>

                    <div className="subscribe-btn">
                        <a href="#">Suscribite</a>
                    </div>
                </div>
                
                <div className='subscribe-bottom'>
                    <span> Conseguí los mejores beneficios en Mercado Libre </span>

                    <div className='subscribe-benefits'>
                        <div className="disney">
                            <div className="logo">
                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/widget-l6/dplus@2x.png" alt="disney+ logo" />
                            </div>
                            <span>Disney+ incluido</span>
                        </div>

                        <div className="shipment">
                            <div className="logo">
                                <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png" alt="shipment logo" />
                            </div>
                            <span>Envíos gratis y rápidos desde $ 23.000 y 45% OFF en envíos de menos de $ 23.000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="movie-banner-wrapper">
                
                <img src="https://http2.mlstatic.com/D_NQ_803027-MLU74643615266_022024-OO.webp" alt="background image" />

                <div className='movie-banner-info'>

                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/touchpoint_trailer/logo-mercado-play-v3.png" alt="mercadoplay logo" />
                    
                    <div className='text-container'>
                        <h2>Ahora podés ver series y películas</h2>
                        <span>GRATIS</span>
                    </div>

                    <button>Ir a Mercado Play</button>

                </div>
                
                <div className='movie-banner'>
                    <img src="https://http2.mlstatic.com/D_NQ_908278-MLA77634269219_072024-OO.webp"></img>
                </div>

            </div>

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Relacionado con tus visitas en Salud y Equipamiento Médico"}
            />

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Elegidos para vos en Belleza y Cuidado Personal"}
            />
            
            <ThreeCategories/>

        </>
    );
}
 
export default HomeBody;
