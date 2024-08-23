import '../styles/twoOffers.css'
import TwoOffersCard from './TwoOffersCard';

const TwoOffersSection = ({ stCardtxt1, stCardtxt2, stCardtxt3, stCardimg , ndCardtxt1, ndCardtxt2, ndCardtxt3, ndCardimg  }) => {
    return (
        <>
            <div className="two-offers-wrapper">
                
                <TwoOffersCard
                    imgUrl={stCardimg}
                    firstText={stCardtxt1}
                    secondText={stCardtxt2}
                    thirdText={stCardtxt3}
                />
                
                <TwoOffersCard
                    imgUrl={ndCardimg}
                    firstText={ndCardtxt1}
                    secondText={ndCardtxt2}
                    thirdText={ndCardtxt3}
                />
            </div>
        </>
    );
}
 
export default TwoOffersSection;