import { useEffect, useState } from "react"
import '../../styles/home/shortcuts.css'

const Shortcuts = () => {
    const [size, setSize] = useState(0)
    const [sizeAcum, setSizeAcum] = useState(0)

    const getInitialSize = () => {
        const card = document.querySelector('.card')
        const carousel = document.querySelector('.cards-container')
        const styles = getComputedStyle(carousel);
        const tam = -((card.scrollWidth * 2)  + Number(styles.gap.slice(0, -2)) * 2)
        setSize(tam)
        setSizeAcum(tam)
    }
    
    useEffect(() => {
        getInitialSize()
    }, [])

    
    const handleNext = () => {
        // Array de cards para saber la cantidad
        const cards_array = document.querySelectorAll('.cards-container > .card')
        
        // Tamaño límite total llegando a mostrar las últimas cards
        const limitSize = cards_array.length*(size/2) - size/2*6 
        
        // Actualizamos el tamaño del translate para moverlo a la derecha
        const carousel = document.querySelector('.cards-container')
        carousel.style.transform = `translateX(${sizeAcum}px)`
        
        // Controlar los botones
        if(sizeAcum === limitSize) {
            const btn = document.querySelector('.btn-shortcut.right')
            btn.style.visibility = 'hidden'
            const btn2 = document.querySelector('.btn-shortcut.left')
            btn2.style.visibility = 'visible'
            setSizeAcum(sizeAcum-size)
        } else {
            setSizeAcum(sizeAcum+size)
        }
    }

    const handlePrev = () => {
        // Actualizamos el tamaño del translate para moverlo a la izquierda
        const carousel = document.querySelector('.cards-container')
        carousel.style.transform = `translateX(${sizeAcum}px)`

        // Controlar los botones
        if(sizeAcum === 0) {
            const btn = document.querySelector('.btn-shortcut.right')
            btn.style.visibility = 'visible'
            const btn2 = document.querySelector('.btn-shortcut.left')
            btn2.style.visibility = 'hidden'
            setSizeAcum(sizeAcum+size)
        } else {
            setSizeAcum(sizeAcum-size)
        }
    }

    return (
        <>
            <div className="shortcuts-container">
                <div className="shortcuts-wrapper">

                    <button className='btn-shortcut left' onClick={handlePrev}>
                    </button>
                    
                    <button className='btn-shortcut right' onClick={handleNext}>
                    </button>

                    <div className="shortcuts">

                        <div className="cards-container">

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Visto recientemente</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://www.nippon.com/es/ncommon/contents/japan-topics/560509/560509.jpg'/>
                                </div>
                                <div className='card-bottom-rec'>
                                    <span className='article-title'>Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku Hatsune Miku </span>
                                    <div className='card-bottom-price'>
                                        <span>Precio con descuento</span>
                                        <div className='card-precios'>
                                            <span>$ 23.000</span>
                                            <span>38% off</span>
                                        </div>
                                        <div>
                                            Envío gratis
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Ingresá a tu cuenta</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg'/>
                                </div>
                                <div className='card-bottom'>
                                    <span className='article-title'>Disfrutá de ofertas y comprá sin límites</span>

                                    <div className='card-btn'>
                                        <a>Ingresar a tu cuenta</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Medios de pago</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg'/>
                                </div>
                                <div className='card-bottom'>
                                    <span className='article-title'>Pagá tus compras de forma rápida y segura</span>

                                    <div className='card-btn'>
                                        <a>Conocer medios de pago</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Menos de $20.000</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/low-price-product.svg   '/>
                                </div>
                                <div className='card-bottom'>
                                    <span className='article-title'>Descubrí productos con precios bajos</span>
                                    <div className='card-btn'>
                                        <a>Mostrar productos</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Más vendidos</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/top-sale.svg'/>
                                </div>
                                <div className='card-bottom'>
                                    <span className='article-title'>Explorá los productos que son tendencia</span>
                                    <div className='card-btn'>
                                        <a>Ir a Más vendidos</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Compra protegida</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/buy-protected.svg'/>
                                </div>
                                <div className='card-bottom'>
                                    <span className='article-title'>Podes devolver tu compra gratis</span>

                                    <div className='card-btn'>
                                        <a>Cómo funciona</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Tiendas oficiales</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/store-official.svg'/>
                                </div>
                                <div className='card-bottom'>
                                    <span className='article-title'>Encontrá tus marcas preferidas</span>

                                    <div className='card-btn'>
                                        <a>Mostrar tiendas</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-title'>
                                    <h5>Nuestras categorías</h5>
                                </div>
                                <div className='card-img'>
                                    <img src='https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/categories.svg'/>
                                </div>
                                <div className='card-bottom'>
                                    <span className='article-title'>Encontrá celulares, ropa, inmuebles y más</span>

                                    <div className='card-btn'>
                                        <a>Ir a Categorías</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Shortcuts;