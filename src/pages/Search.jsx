import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useFilterStore } from '../utils/store';

import Header from '../components/Header';
import BottomMostSearched from '../components/BottomMostSearched';
import Footer from '../components/Footer';
import ProductList from '../components/search/ProductsList';
import Sidebar from '../components/search/Sidebar';
import useGetData from '../hooks/useGetData.js';
import { useEffect } from 'react';



const Search = () => {

    const { query } = useParams()
    const { filters, order, toggleFilter } = useFilterStore()
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`

    const { data } = useQuery({
        queryKey: ['search', query, filters, order],
        queryFn: () => useGetData(url, filters, order),
    })

    
    
    useEffect(() => {
        if (data) {
            const filterens = {
                fullShipping: data?.filteredData.some(item => item.shipping.logistic_type === "fulfillment"),
                freeShipping: data?.filteredData.some(item => item.shipping.free_shipping),
                lowInterest: data?.filteredData.some(item => item.installments.rate < 15),
                internationalDelivery: data?.filteredData.some(item => item.address.state_id.includes("US-"))
            }
            toggleFilter(filterens)
        }
    }, [data])

    // if (data) console.log('Le data:', data)
    

    return (
        <>
            <Header />
            
            <div className="search-wrapper">

                { data?.dataCategory && 
                    <Sidebar
                        categoryName={data?.dataCategory}
                        totalResults={data?.totalResults}
                        query={query}
                        sbfilters={data?.sbfilters}
                    />
                }

                <ProductList
                    data={data?.filteredData}
                />

            </div>
            
            <BottomMostSearched/>
            <Footer/>
        </>
    );
}
 
export default Search;