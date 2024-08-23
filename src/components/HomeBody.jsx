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
import TwoOffersSection from './TwoOffersSection';

import { benefitsData } from '../utils/data';
import useGetData from '../hooks/useGetData';
import CategoriesSlider from './CategoriesSlider';



// Cards para el componente BannerSlider
const cards = Array.from({ length: 24 }, (v, i) => i);




const HomeBody = () => {

    // API para imagenes random de Hatsune Miku https://api.nekosapi.com/v3/characters/1/images
    // const data = useGetData('https://api.waifu.im/search?is_nsfw=false&limit=24')

    // console.log(data)

    
    // const getTheFuckingData = async () => {
    //     // Simulando la llamada a la API
    //     const response = await fetch('https://api.waifu.im/search?is_nsfw=true&limit=24')
    //     const data = await response.json()
    //     setData(data.images)
    // }
    

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

            
            <TwoOffersSection
                stCardtxt1={"TECNO OFERTAS"}
                stCardtxt2={"HASTA 30% OFF Y"}
                stCardtxt3={"12X SIN INTERÉS"}
                stCardimg={"https://http2.mlstatic.com/D_NQ_818115-MLA78556065987_082024-OO.jpg"}
                ndCardtxt1={""}
                ndCardtxt2={"LAS OFERTAS"}
                ndCardtxt3={"MÁS BUSCADAS"}
                ndCardimg={"https://http2.mlstatic.com/D_NQ_631229-MLA78158672620_082024-OO.jpg"}
            />
            
            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Similares a lo que te interesa"}
            />  

            
            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Inspirado en lo que te interesa"}
            /> 


            <TwoOffersSection
                stCardtxt1={""}
                stCardtxt2={"LAS OFERTAS"}
                stCardtxt3={"MÁS BUSCADAS"}
                stCardimg={"https://http2.mlstatic.com/D_NQ_847826-MLA78386827199_082024-OO.jpg"}
                ndCardtxt1={""}
                ndCardtxt2={"OFERTAS QUE TE"}
                ndCardtxt3={"LLEGAN VOLANDO"}
                ndCardimg={"https://http2.mlstatic.com/D_NQ_758583-MLA78158668786_082024-OO.jpg"}
            />


            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Más vendidos de la semana en Repelentes"}
                showLink={true}
                link={"#"}
                linkText={"Ir a Más vendidos"}
            /> 

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Más vendidos de la semana en Paraguas"}
                showLink={true}
                link={"#"}
                linkText={"Ir a Más vendidos"}
            />

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Más vendidos de la semana en Para Cocina"}
                showLink={true}
                link={"#"}
                linkText={"Ir a Más vendidos"}
            /> 

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Más vendidos de la semana en Indumentaria y Calzado"}
                showLink={true}
                link={"#"}
                linkText={"Ir a Más vendidos"}
            /> 

            <BannerSlider
                data={cards}
                totalCards={6}
                title={"Más vendidos de la semana en Notebooks"}
                showLink={true}
                link={"#"}
                linkText={"Ir a Más vendidos"}
            /> 
            
            <CategoriesSlider/>

        </>
    );
}
 
export default HomeBody;
