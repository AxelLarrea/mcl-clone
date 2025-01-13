import useGetData from '../hooks/useGetData';
import Header from '../components/Header';
import BottomMostSearched from '../components/BottomMostSearched';
import Footer from '../components/Footer';
import ProductList from '../components/search/ProductsList';
import Sidebar from '../components/search/Sidebar';
import { useParams } from 'wouter';


const Search = () => {
    const { query } = useParams()
    const { data } = useGetData(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=20`)
    const dataCategory = data?.results[0].category_id
    const totalResults = data?.paging.total
    const filters = data?.available_filters

    return (
        <>
            <Header />
            
            <div className="search-wrapper">

                { dataCategory && 
                    <Sidebar
                        categoryName={dataCategory}
                        totalResults={totalResults}
                        query={query}
                        sbfilters={filters}
                    />
                }

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