import '../styles/twoOffers.css'
import TwoOffersCard from './TwoOffersCard';

const TwoOffersSection = () => {
    return (
        <>
            <div className="two-offers-wrapper">
                
                <TwoOffersCard
                    imgUrl={"https://http2.mlstatic.com/D_NQ_818115-MLA78556065987_082024-OO.jpg"}
                    firstText={"TECNO OFERTAS"}
                    secondText={"HASTA 30% OFF Y"}
                    thirdText={"12X SIN INTERÉS"}
                />
                
                <TwoOffersCard
                    imgUrl={"https://http2.mlstatic.com/D_NQ_631229-MLA78158672620_082024-OO.jpg"}
                    secondText={"LAS OFERTAS"}
                    thirdText={"MÁS BUSCADAS"}
                />
            </div>
        </>
    );
}
 
export default TwoOffersSection;