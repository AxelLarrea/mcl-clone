import { useState, useEffect } from 'react';
import Header from '../components/Header';
import useGetData from '../hooks/useGetData';
import BottomMostSearched from '../components/BottomMostSearched';
import Footer from '../components/Footer';
import ProductList from '../components/search/ProductsList';
import Sidebar from '../components/search/Sidebar';


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
            
            <div className="search-wrapper">
                <Sidebar/>

                <ProductList
                    data={data}
                />
            </div>
            
            <BottomMostSearched/>
            <Footer/>
        </>
    );
}
 
export default Search;