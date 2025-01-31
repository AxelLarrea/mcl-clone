import { useRef, useState } from 'react';
import '../../styles/general/footer.css'


const Footer = () => {

    const [clicked, setClicked] = useState(true)
    const footerInfo = useRef(null)
    const footerBottom = useRef(null)
    const btn = useRef(null)

    
    const handleClick = () => {
        
        const svg = document.querySelector('.footer-more-btn button svg')
        
        if (!clicked) {
            footerInfo.current.style.maxHeight = 0
            footerBottom.current.style.borderTop = 0
            btn.current.style.backgroundColor = '#fff'
            svg.style.transform = 'rotate(0)'
            svg.style.animation = '.2s rotate-up'
        } else {
            footerInfo.current.style.maxHeight = '250px'
            footerBottom.current.style.borderTop = '1px rgb(230, 230, 230) solid'
            btn.current.style.backgroundColor = '#f7f7f7'
            svg.style.transform = 'rotate(180deg)'
            svg.style.animation = '.2s rotate-down'
        }
        setClicked(prev => !prev)
    }   

    return (
        <footer>
            
            <div className="footer-more-info" ref={footerInfo}>
                <div className="footer-more-btn">
                    <button onClick={handleClick} ref={btn}>
                        Más Información

                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58.5 37.3" enableBackground="new 0 0 58.5 37.3" xmlSpace="preserve">
                            <path fillRule="evenodd" clipRule="evenodd" fill="#3E3E3E" d="M54.7,26.3L32.5,4.2c-2-1.9-5-1.9-6.9,0L3.4,26.3
                                c-2,2-2.4,4.8-0.4,6.7l0.8,0.9c1.7,1.6,3.9,1.9,5.4,0.2c5.5-5.5,11-10.8,16.5-16.3c1.8-2,4.9-2,6.9,0c5.5,5.5,10.9,10.8,16.3,16.3
                                c1.7,1.7,3.7,1.4,5.5-0.2l0.7-0.9C57.1,31.1,56.7,28.3,54.7,26.3L54.7,26.3z">
                            </path>
                        </svg>
                    </button>
                </div>

                <div className="footer-info-columns">
                    <div className="footer-column">
                        <h5>Acerca de</h5>
                        <a href="">Mercado Libre</a>
                        <a href="">Investor relations</a>
                        <a href="">Tendencias</a>
                        <a href="">Sustentabilidad</a>
                        <a href="">Blog</a>
                    </div>

                    <div className="footer-column">
                        <h5>Otros sitios</h5>
                        <a href="">Developers</a>
                        <a href="">Mercado Pago</a>
                        <a href="">Mercado Shops</a>
                        <a href="">Envíos</a>
                        <a href="">Mercado Ads</a>
                    </div>

                    <div className="footer-column">
                        <h5>Ayuda</h5>
                        <a href="">Comprar</a>
                        <a href="">Vender</a>
                        <a href="">Resolución de problemas</a>
                        <a href="">Centro de seguridad</a>
                    </div>

                    <div className="footer-column">
                        <h5>Redes Sociales</h5>
                        <a href="">X</a>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Youtube</a>
                    </div>

                    <div className="footer-column">
                        <h5>Mi cuenta</h5>
                        <a href="">Ingresá</a>
                        <a href="">Vendé</a>
                    </div>

                    <div className="footer-column">
                        <h5>Mercado Puntos</h5>
                        <a href="">Nivel 6</a>
                        <a href="">Disney+</a>
                        <a href="">Max</a>
                        <a href="">Paramount+</a>
                        <a href="">ViX Premium</a>
                    </div>
                </div>
            </div>


            <div className="footer-bottom-wrapper" ref={footerBottom}>
                <div className="footer-bottom-info">
                    <div className='footer-bottom-item'>
                        <ul>
                            <li>Trabajá con nosotros</li>
                            <li>Términos y condiciones</li>
                            <li>Promociones</li>
                            <li>Cómo cuidamos tu privacidad</li>
                            <li>Accesibilidad</li>
                            <li>Información al usuario financiero</li>
                            <li>Ayuda</li>
                            <li>Defensa del Consumidor</li>
                            <li>Información sobre seguros</li>
                            <li>Libro de quejas online</li>
                        </ul>
                    </div>
                    
                    <div className="footer-bottom-text">
                        <p>Copyright © 1999-2024 MercadoLibre S.R.L.</p>
                        <p>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
