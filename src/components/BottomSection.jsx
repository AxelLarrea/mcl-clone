import '../styles/bottomSection.css'

const BottomSection = () => {
    return (
        <>
            <div className="bottom-info">

                <div className="bottom-shopping-info">
                    <div className="shopping-item">
                        <div className='shopping-img-container'>
                            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="" />
                        </div>
                        <div className='shopping-text'>
                            <span>Elegí como pagar</span>
                            <p>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
                            <a href="#">Cómo pagar tus compras</a>
                        </div>
                    </div>

                    <div className="shopping-item">
                        <div className='shopping-img-container'>
                            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="" />
                        </div>
                        <div className='shopping-text'>
                            <span>Envío gratis desde $ 23.000</span>
                            <p>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</p>
                            <a href="#"></a>
                        </div>
                    </div>
                    
                    <div className="shopping-item">
                        <div className='shopping-img-container'>
                            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="" />
                        </div>
                        <div className='shopping-text'>
                            <span>Seguridad, de principio a fin</span>
                            <p>¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                            <a href="#">Cómo te protegemos</a>
                        </div>
                    </div>
                </div>

                <div className="bottom-regret">
                    <div></div>
                    <div></div>
                </div>

                <div className="bottom-help">

                </div>

                <div className="bottom-most-searched">
                    <p>Productos más buscados</p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </>
    );
}
 
export default BottomSection;