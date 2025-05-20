import axios from 'axios';
import filter from '../utils/filter';

const useGetData = async (query, offset, filters, order, type, priceRange, token) => {
    // const FETCH_URL = `/api/getData?token=${token}&url=${url}`
    const FETCH_URL = `http://localhost:3000/api/getData?token=${token}&query=${query}&offset=${offset}`

    try {
        const response = await axios.get(FETCH_URL);
        const data = await response.data

        console.log('response: ', response);
        console.log('data: ', data);

        if (type !== 'productList') return data
        
        const dataCategory = data.results[0].category_id
        const totalResults = data.paging.total
        const sbfilters = data.available_filters
        const filteredData = filter(data.results, filters, priceRange);
        
        if (order === 'asc') filteredData.sort((a, b) => a.sale_price.amount - b.sale_price.amount)
        if (order === 'desc') filteredData.sort((a, b) => b.sale_price.amount - a.sale_price.amount)

        return { filteredData, dataCategory, totalResults, sbfilters };
    } catch (error) {
        console.error(error)
    }
}

export default useGetData;