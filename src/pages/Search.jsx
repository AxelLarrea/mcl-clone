import { useEffect } from 'react';
import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useFilterStore } from '../utils/store';

import Header from '../components/Header';
import BottomMostSearched from '../components/BottomMostSearched';
import Footer from '../components/Footer';
import ProductList from '../components/search/ProductsList';
import Sidebar from '../components/search/Sidebar';
import useGetData from '../hooks/useGetData.js';



const Search = () => {

    const { query } = useParams()
    const { filters, order, setViewFilter, priceRange, page } = useFilterStore()
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&offset=${(page-1)*50}`

    const { data } = useQuery({
        queryKey: ['search', query, filters, order, priceRange, page],
        queryFn: () => useGetData(url, filters, order, null ,priceRange),
    })


    useEffect(() => {
        
        if (data) {
            const filters = {
                fullShipping: data?.filteredData.some(item => item.shipping?.logistic_type === "fulfillment"),
                freeShipping: data?.filteredData.some(item => item.shipping?.free_shipping),
                lowInterest: data?.filteredData.some(item => item.installments?.rate < 15),
                internationalDelivery: data?.filteredData.some(item => item.address?.state_id.includes("US-"))
            }
            setViewFilter(filters)
        }
    }, [data])

    // console.log('page ', page)
    // if (data) console.log('Le data:', data)
    

    return (
        <>
            <Header />
            
            <div className="search-wrapper">

                {   data?.dataCategory && 
                    <Sidebar
                        categoryName={data?.dataCategory}
                        totalResults={data?.totalResults}
                        query={query}
                        sbfilters={data?.sbfilters}
                    />
                }

                {   data?.filteredData &&
                    <ProductList
                        data={data?.filteredData}
                        totalResults={data?.totalResults}
                    />
                }

            </div>
            
            <BottomMostSearched/>
            <Footer/>
        </>
    );
}
 
export default Search;