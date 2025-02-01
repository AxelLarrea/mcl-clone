import { useEffect } from 'react';
import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useFilterStore } from '../utils/store';
import useGetData from '../hooks/useGetData.js';

import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import BottomMostSearched from '../components/general/BottomMostSearched';
import ProductList from '../components/search/ProductsList';
import Sidebar from '../components/search/Sidebar';

const Search = () => {

    const { query } = useParams()
    const { filters, order, setViewFilter, priceRange, page, setPage, prevQuery, setPrevQuery } = useFilterStore()
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&offset=${(page-1)*50}`

    const { data } = useQuery({
        queryKey: ['search', query, filters, order, priceRange, page],
        queryFn: () => useGetData(url, filters, order, 'productList' ,priceRange),
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

        if (query !== prevQuery) {
            setPrevQuery(query)
            setPage(1)
        }

    }, [data])

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