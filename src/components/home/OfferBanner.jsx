import BannerSlider from "./BannerSlider";
import '../../styles/home/offersBanner.css'

const OfferBanner = ({ cards }) => {
    return (
        <>
            <div className="offer-wrapper">
                <div className="offer-day">
                    <div className="card">
                        <div className="title">
                            <span>Oferta del día</span>
                        </div>
                        <div className='card-img'>
                            <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                        </div>
                        <div className='card-bottom-rec'>
                            <span className='article-title'>Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku </span>
                            <div className='card-bottom-price'>
                                <span>Precio con descuento</span>
                                <div className='card-precios'>
                                    <span>$ 23.000</span>
                                    <span>38% OFF</span>
                                </div>

                                <span className='cuotas'>En 3 cuotas de $ 3250</span>
                                <div>
                                    Envío gratis
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BannerSlider
                    data={cards}
                    totalCards={4}
                    title={"Ofertas"}
                    showLink={true}
                    link={"#"}
                    linkText={"Mostrar todas las ofertas"}
                />
            </div>
        </>
    );
}
 
export default OfferBanner;