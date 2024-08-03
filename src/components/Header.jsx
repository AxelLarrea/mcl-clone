


const Header = () => {
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
                        <input type="text" placeholder="Buscar productos, marcas y más"/>
                        <button></button>
                    </div>

                    <div className="disney-add">
                        <img src="https://http2.mlstatic.com/D_NQ_983407-MLA77032071380_062024-OO.webp" alt="Disney* add"/>
                    </div>
                </div>

                <div className="nav-bar">
                    <div className="nav-sendto">
                        <a href="">
                            <img src="../assets/pin.png"/>
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
                                                <a href="#">D.1</a>
                                            </div>

                                            <div className="nested-dropdown-btn">
                                                <span>Cámaras y Accesorios</span>
                                                <a href="#">D.2</a>
                                            </div>

                                            <div className="nested-dropdown-btn">
                                                <span>Consolas y Videojuegos</span>
                                                <a href="#">D.3</a>
                                            </div>

                                            <div className="nested-dropdown-btn">
                                                <span>Computación</span>
                                                <a href="#">D.1</a>
                                            </div>

                                            <div className="nested-dropdown-btn">
                                                <span>Electrónica, Audio y Video</span>
                                                <a href="#">D.2</a>
                                            </div>

                                            <div className="nested-dropdown-btn">
                                                <span>Televisores</span>
                                                <a href="#">D.3</a>
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
                        <a href="">
                            Creá tu cuenta
                        </a>
                        <a href="">
                            Ingresá
                        </a>
                        <a href="">
                            Mis compras
                        </a>
                        <a href="">
                            <img src="../assets/cart.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;
