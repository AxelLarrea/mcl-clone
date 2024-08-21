import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Shortcuts from './Shortcuts';
import BannerSlider from './BannerSlider';
import ThreeCategories from './ThreeCategories';
import SubscribeBanner from './SubscribeBanner';
import MovieBanner from './MovieBanner';
import AdBanner from './AdBanner';
import OfferBanner from './OfferBanner';
import BenefitsBanner from './BenefitsBanner';
import { benefitsData } from '../utils/data';

// Cards para el componente BannerSlider
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
            
            <SubscribeBanner/>
            <MovieBanner/>

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
            <AdBanner/>
            <OfferBanner
                cards={cards}
            />

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Porque viste productos de Belleza y Cuidado Personal"}
            />


            <BenefitsBanner 
                data={benefitsData}
                totalCards={3}
            />

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Más vendidos en Máscaras de pestañas"}
                showLink={true}
                link={"#"}
                linkText={"Ir a Más vendidos"}
            />

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Relacionado con lo último que viste"}
                
            />  

        </>
    );
}
 
export default HomeBody;
