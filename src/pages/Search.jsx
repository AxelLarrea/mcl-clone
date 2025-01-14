import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useFilterStore } from '../utils/store';

import Header from '../components/Header';
import BottomMostSearched from '../components/BottomMostSearched';
import Footer from '../components/Footer';
import ProductList from '../components/search/ProductsList';
import Sidebar from '../components/search/Sidebar';
import useGetData2 from '../utils/useGetData2.js';



const Search = () => {

    const { query } = useParams()
    const { filters } = useFilterStore()
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=20`

    const { data } = useQuery({
        queryKey: ['search', filters, query],
        queryFn: () => useGetData2(url, filters),
    })

    console.log('Le data:', data)


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