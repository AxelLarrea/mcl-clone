import { useRef, useState } from "react";
import "../styles/CategoriesSlider.css"


const categories = [
    "Autos, Motos y Otros", "Celulares y Teléfonos", "Electrodomésticos y Aires Ac.", "Herramientas", 
    "Accesorios para Vehículos", "Ropa y Accesorios", "Deportes y Fitness", "Belleza y Cuidado Personal",
    "Hogar, Muebles y Jardín", "Computación", "Inmuebles", "Electrónica, Audio y Video",
    "Agro", "Antigüedades y Colecciones", "Consolas y Videojuegos", "Entradas para Eventos", 
    "Alimentos y Bebidas", "Arte, Librería y Mercería", "Construcción", "Industrias y Oficinas", 
    "Animales y Mascotas", "Bebés", "Cámaras y Accesorios", "Instrumentos Musicales",
    "Agro", "Antigüedades y Colecciones", "Consolas y Videojuegos", "Entradas para Eventos", 
    "Alimentos y Bebidas", "Arte, Librería y Mercería", "Construcción", "Industrias y Oficinas", 
    "Animales y Mascotas", "Bebés", "Cámaras y Accesorios", "Instrumentos Musicales"
]

const categoriesImg = [
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_car-front-new-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_mobile-button-category.webp", 
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_oven-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_settings-tool-67-category.webp",
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_steering-wheel-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_style_winter-6-category.webp", 
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_ball-soccer-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_makeup-category.webp",
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_armchair_blue-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_tv-2-category.webp", 
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_building-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_audio-92-category.webp",
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_tractor-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_hourglass-category.webp", 
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_controller-2-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_ticket-75-category.webp",
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_chef-hat-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_palette-category.webp", 
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_factory-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_chair-category.webp",
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_food-dog-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_baby-category.webp",
    "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_camera-20-category.webp", "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_guitar-category.webp",
]

const dots = Array.from({ length: Math.ceil(categories.length/12) }, (v, i) => i);

const CategoriesSlider = () => {
    const [sizeAcum, setSizeAcum] = useState(0)
    const [index, setIndex] = useState(0)
    const carousel = useRef(null)
    const btnRight = useRef(null)
    const btnLeft = useRef(null)
    

    const handleNext = () => {
        
        setIndex(prev => prev+1)
        
        // Actualizamos el tamaño del translate para moverlo a la derecha
        const card = document.querySelector('.categories-cards > .category-card')
        const cardStyles = getComputedStyle(card)
        const carouselStyles = getComputedStyle(carousel.current);
        const cardWidth = Number(cardStyles.width.slice(0, -2)) * 4
        const gap = Number(carouselStyles.gap.slice(0, -2)) * 4
        const move = cardWidth+gap
        carousel.current.style.transform = `translateX(${sizeAcum-move}px)`

        // Controlar los botones
        if(sizeAcum-move === -move) {
            btnRight.current.style.visibility = 'hidden'
            btnLeft.current.style.visibility = 'visible'
            setSizeAcum(sizeAcum+move)
        } else {
            btnRight.current.style.visibility = 'visible'
            btnLeft.current.style.visibility = 'visible'
            setSizeAcum(sizeAcum-move)
        }
    }
    

    const handlePrev = () => {
        setIndex(prev => prev-1)

        // Actualizamos el tamaño del translate para moverlo a la izquierda
        const card = document.querySelector('.categories-cards > .category-card')
        const cardStyles = getComputedStyle(card)
        const carouselStyles = getComputedStyle(carousel.current);
        const cardWidth = Number(cardStyles.width.slice(0, -2)) * 4
        const gap = Number(carouselStyles.gap.slice(0, -2)) * 4
        const move = cardWidth+gap
        carousel.current.style.transform = `translateX(${sizeAcum-move}px)`


        // Controlar los botones
        if(sizeAcum-move === 0) {
            btnRight.current.style.visibility = 'visible'
            btnLeft.current.style.visibility = 'hidden'
            setSizeAcum(sizeAcum-move)
        } else {
            btnRight.current.style.visibility = 'visible'
            btnLeft.current.style.visibility = 'visible'
            setSizeAcum(sizeAcum+move)
        }
    }

    return (
        <>
            <div className="categories-slider-wrapper">
                
                <button className="btn-shortcut left" ref={btnLeft} onClick={handlePrev}></button>
                <button className="btn-shortcut right" ref={btnRight} onClick={handleNext}></button>

                <div className="banner-header">

                    <div>
                        <h3>Categorías</h3>
                        <a href="#">Mostrar todas las categorías</a>
                    </div>

                    <div className="dots-container">

                        {   dots.map( (item, key) => 
                                <span className={`carrousel-dot ${ key === index ? "active" : "" }`} key={key}></span>
                            )
                        }

                    </div>

                </div>

                <div className="categories-slider">

                    <div className="categories-cards" ref={carousel}>

                        { categories.map( (card, id) => (

                                <div className="category-card" key={id}>
                                    <div className="category-img ">
                                        <img src={categoriesImg[id]} alt="category" />
                                    </div>

                                    <div className="category-text">
                                        <span>{card}</span>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>
        </>
    );
}
 
export default CategoriesSlider;