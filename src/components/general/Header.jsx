import { useState } from 'react';
import { useLocation } from 'wouter';
import '../../styles/general/header.css';


const Header = () => {
    const [location, navigate] = useLocation()
    const [inputValue, setInputValue] = useState('')
    const url = '/search/';
    
    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue.length > 1 ? navigate(`${url}${inputValue}`) : ''
    }

    return (
        <header>
            <div className="header-wrapper">
                <div className="searcher-container">
                    <div className="logo-container">
                        <a href="/">
                            <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.59/mercadolibre/logo_large_25years_v2.png" alt="Mcl logo"/>
                        </a>
                    </div>

                    <div className="search-bar">
                        <form onSubmit={handleSubmit} className='search-bar-form'>
                            <input 
                                type="text" 
                                name="search"
                                placeholder="Buscar productos, marcas y más..." 
                                value={inputValue} 
                                onChange={(e) => setInputValue(e.target.value)}
                                minLength="2"
                            />

                            <button type="submit">
                                <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#666" strokeWidth="0.00024000000000000003">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.336"></g>
                                    <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#666"></path> </g>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className="disney-add">
                        <img src="https://http2.mlstatic.com/D_NQ_983407-MLA77032071380_062024-OO.webp" alt="Disney* add"/>
                    </div>
                </div>

                <div className="nav-bar">
                    <div className="nav-sendto">
                        <a href="#">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M18 9C18 13.7462 14.2456 18.4924 12.6765 20.2688C12.3109 20.6827 11.6891 20.6827 11.3235 20.2688C9.75444 18.4924 6 13.7462 6 9C6 7 7.5 3 12 3C16.5 3 18 7 18 9Z" stroke="#000000" strokeLinejoin="round"></path> <circle cx="12" cy="9" r="2" stroke="#000000" strokeLinejoin="round"></circle> </g>
                            </svg>
                        </a>
                        <div>
                            <span>Enviar a</span>
                            <span>Entre Ríos 3260</span>
                        </div>
                    </div>

                    <ul className="nav-list">
                        <li id="category">
                            <a href="#">Categorías</a>
                            <ul className="nav-list-dropdown">
                                <div className="dropdowns-container">
                                    <li><a href="#">Vehículos</a></li>
                                    <li><a href="#">Inmuebles</a></li>
                                    <li><a href="#">Supermercado</a></li>
                                    <li id="tec-cat">
                                        <a href="#">Tecnología</a>
                                        <div className="nav-list-dropdown-nested">
                                            <p>Tecnología</p>
                                            <hr></hr>
                                            <div className="nested-dropdown-grid">
                                                <div className="nested-dropdown-btn">
                                                    <span>Celulares y Teléfonos</span>
                                                    <a href="#">Celulares y Smartphones</a>
                                                    <a href="#">Accesorios para Celulares</a>
                                                </div>

                                                <div className="nested-dropdown-btn">
                                                    <span>Cámaras y Accesorios</span>
                                                    <a href="#">Cámaras Digitales</a>
                                                    <a href="#">Accesorios para Cámaras</a>
                                                </div>

                                                <div className="nested-dropdown-btn">
                                                    <span>Consolas y Videojuegos</span>
                                                    <a href="#">Videojuegos</a>
                                                    <a href="#">Para playstation</a>
                                                </div>

                                                <div className="nested-dropdown-btn">
                                                    <span>Computación</span>
                                                    <a href="#">Componentes de PC</a>
                                                    <a href="#">Impresión</a>
                                                    <a href="#">Tablets y Accesorios</a>
                                                    <a href="#">PC</a>
                                                    <a href="#">Conectividad y Redes</a>
                                                </div>

                                                <div className="nested-dropdown-btn">
                                                    <span>Electrónica, Audio y Video</span>
                                                    <a href="#">Audio</a>
                                                    <a href="#">Accesorios para Audio y Video</a>
                                                    <a href="#">Componentes Electrónicos</a>
                                                    <a href="#">Drones y Accesorios</a>
                                                    <a href="#">Audio para Vehículos</a>
                                                </div>

                                                <div className="nested-dropdown-btn">
                                                    <span>Televisores</span>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#">Hogar y Muebles</a></li>
                                    <li><a href="#">Electrodomésticos</a></li>
                                    <li><a href="#">Herramientas</a></li>
                                    <li><a href="#">Construcción</a></li>
                                    <li><a href="#">Deportes y Fitness</a></li>
                                    <li><a href="#">Accesorios para Vehículos</a></li>
                                    <li><a href="#">Moda</a></li>
                                    <li><a href="#">Juegos y Juguetes</a></li>
                                    <li><a href="#">Bebés</a></li>
                                    <li><a href="#">Belleza y Cuidado Personal</a></li>
                                    <li><a href="#">Salud y Equipamiento Médico</a></li>
                                    <li><a href="#">Industrias y Oficinas</a></li>
                                    <li><a href="#">Agro</a></li>
                                    <li><a href="#">Productos Sustentables</a></li>
                                    <li><a href="#">Servicios</a></li>
                                    <li><a href="#">Más vendidos</a></li>
                                    <li><a href="#">Tiendas oficiales</a></li>
                                    <li><a href="#">Ver más categorías</a></li>
                                </div>
                            </ul>
                        </li>
                        <li><a href="#">Ofertas</a></li>
                        <li><a href="#">Historial</a></li>
                        <li><a href="#">Supermercado</a></li>
                        <li><a href="#">Moda</a></li> 
                        <li><a href="#">Mercado Play</a></li>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>

                    <div className="nav-last">
                        <a href="#">
                            Creá tu cuenta
                        </a>
                        <a href="#">
                            Ingresá
                        </a>
                        <a href="#">
                            Mis compras
                        </a>
                        <a href="#">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.41442 6H3.75V4.5H6.58558L7.33558 7.5H18.935L17.2321 15.1627L16.5 15.75H8.25L7.51786 15.1627L6.02 8.42233L5.41442 6ZM7.68496 9L8.85163 14.25H15.8984L17.065 9H7.68496ZM10.5 18C10.5 18.8284 9.82843 19.5 9 19.5C8.17157 19.5 7.5 18.8284 7.5 18C7.5 17.1716 8.17157 16.5 9 16.5C9.82843 16.5 10.5 17.1716 10.5 18ZM15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z" fill="#080341"></path> </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;
