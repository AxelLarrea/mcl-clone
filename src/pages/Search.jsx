import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Item from '../components/search/Item';
import useGetData from '../hooks/useGetData';
import BottomMostSearched from '../components/BottomMostSearched';
import Footer from '../components/Footer';

const Search = () => {

    const data = useGetData('https://api.mercadolibre.com/sites/MLA/search?q=samsung&limit=10')


    return (
        <>
            <Header />

            <div className="related-searches-container">
                <h2>Busquedas relacionadas:</h2>
                <div className="related-searches-wrapper">
                    <a href="#">Samsung Galaxy S21 Ultra</a>
                    <a href="#">Samsung Galaxy S21</a>
                    <a href="#">Samsung Galaxy S21+ 5G</a>
                    <a href="#">Samsung Galaxy S20 Ultra</a>
                    <a href="#">Samsung Galaxy S20+ 5G</a>
                    <a href="#">Samsung Galaxy S20</a>
                    <a href="#">Samsung Galaxy S10e</a>
                    <a href="#">Samsung Galaxy S10</a>
                    <a href="#">Samsung Galaxy S10+ 5G</a>
                    <a href="#">Samsung Galaxy S10</a>
                </div>
            </div>
            
            <div className="sidebar-products-wrapper">

                <aside className="aside-wrapper">

                    <div className="aside-category-path">

                    </div>

                    <div className="aside-search-info">

                    </div>

                    <div className="aside-toggle-filters">
                        <div className="toggle-filter"></div>
                        <div className="toggle-filter"></div>
                        <div className="toggle-filter"></div>
                        <div className="toggle-filter"></div>
                    </div>

                    <div className="aside-brand-filter">
                        {/* Cantidad de marcas automática utilizando map, en el array que se reciba */}
                        <a href="#">Mostrar más</a>
                    </div>

                    <div className="aside-color-filter">
                        {/* Cantidad de colores automática utilizando map, en el array que se reciba */}
                        <a href="#">Mostrar más</a>
                    </div>

                    <div className="aside-state-filter">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>

                    <div className="aside-shipment-filter">
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>

                    <div className="aside-shipment-time-filter">
                        <a href="#"></a>
                    </div>

                    <div className="aside-price-range-filter">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <div className="price-range-input-wrapper">
                            <div className="min-input">
                                <input type="text" className="price-range-input" placeholder="Mínimo"/>
                                {/* Para hacer la línea que separa ambos inputs, usar :after */}
                            </div>
                            <input type="text" className="price-range-input" placeholder="Máximo"/>
                            <button className="price-range-apply-btn">Go</button>
                        </div>
                    </div>
                    
                    <div className="aside-payments-filter">
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>

                    <div className="aside-discounts-filter">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>

                    <div className="aside-promotion-type">
                        <a href="#">Oferta del día</a>
                    </div>

                    <div className="aside-official-store">
                        <a href="#">Solo tiendas oficiales</a>
                    </div>

                    <div className="aside-ubication-filter">
                        {/* Generar en base a un array */}
                        <a href="#">Mostrar más</a>
                    </div>

                    {/* Faltan filtros que deben ser generados en base al tipo de producto */}

                    <div className="aside-bestsellers">
                        <a href="#">Mejores vendedores</a>
                    </div>

                    <div className="aside-other-searches">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>

                    <div className="aside-mercadoshops">
                        <div className="logo">

                        </div>

                        <div className="title">

                        </div>

                        <div className="shops-wrapper">
                            {/* Generar en base a un array que nos de el producto si hay*/}
                            <div className="shop-item"></div>
                        </div>

                    </div>

                </aside>



                <section className="products-wrapper">

                    <div className="products-orderby-wrapper">
                        <div className="products-orderby">
                            <span>Ordenar por: </span>
                            <select>
                                <option value="Más relevantes">Más relevantes</option>
                                <option value="Menor precio">Menor precio</option>
                                <option value="Mayor precio">Mayor precio</option>
                            </select>
                        </div>
                    </div>
                    

                    { data && data.results.map( item => (
                        <Item 
                            key={item.id}
                            item={item}
                        />
                        ))
                    }
                </section>

            </div>
            
            <BottomMostSearched/>
            <Footer/>
        </>
    );
}
 
export default Search;