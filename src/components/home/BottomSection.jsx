import '../../styles/home/bottomSection.css'
import BottomMostSearched from '../BottomMostSearched';

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

                <div className="bottom-regret-wrapper">
                    <div className='bottom-regret'>
                        <h4>Botón de arrepentimiento</h4>
                        <a href="#">Cancelar una compra</a>
                        <a href="#">Cancelar una suscripción</a>
                        <a href="#">Cancelar un seguro o garantía</a>
                    </div>

                    <div className='bottom-regret'>
                        <h4>Conoce las normas que aplican cuando compras</h4>
                        <a href="#">Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor</a>
                    </div>

                </div>

                <div className="bottom-help">
                    <div className='help-container'>
                        <a href="#">
                            <img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/./help-email/icon_email.svg" alt="email logo" />
                            <span>ayuda@mercadolibre.com.ar</span>
                        </a>
                    </div>

                    <div className='help-container'>
                        <a href="#">
                            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg" alt="" />
                        </a>
                    </div>

                    <div className='help-container'>
                        <a href="#">
                            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/banner/usuario-financiero.svg" alt="" />
                        </a>
                    </div>

                    <div className='help-container'>
                        <a href="#">
                            <img src="https://http2.mlstatic.com/frontend-assets/homes-palpatine/data_fiscal.png" alt="" />
                        </a>
                    </div>
                </div>

               <BottomMostSearched/>

            </div>
        </>
    );
}
 
export default BottomSection;