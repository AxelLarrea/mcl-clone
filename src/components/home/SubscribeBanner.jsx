import '../../styles/home/subscribeBanner.css'

const SubscribeBanner = () => {
    return (
        <>
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
        </>
    );
}
 
export default SubscribeBanner;