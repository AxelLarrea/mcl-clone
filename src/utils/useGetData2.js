import axios from 'axios';
import filter from './filter';


const useGetData2 = async (url, filters, order) => {

    try {
        const response = await axios.get(url)
        const data = await response.data

        const dataCategory = data.results[0].category_id
        const totalResults = data.paging.total
        const sbfilters = data.available_filters
        const filteredData = filter(data.results, filters);

        if (order === 'asc') filteredData.sort((a, b) => a.sale_price.amount - b.sale_price.amount)
        if (order === 'desc') filteredData.sort((a, b) => b.sale_price.amount - a.sale_price.amount)

        return { filteredData, dataCategory, totalResults, sbfilters };

    } catch (error) {
        console.log(error)
    }
}

export default useGetData2;