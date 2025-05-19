import axios from 'axios';
import filter from '../utils/filter';

const useGetData = async (url, filters, order, type, priceRange, token) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type',
            }
        })

        const data = await response.data

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