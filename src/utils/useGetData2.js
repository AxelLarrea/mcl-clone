import axios from 'axios';
import filter from './filter';


const useGetData2 = async (url, filters) => {

    try {
        const response = await axios.get(url)
        const data = await response.data

        const dataCategory = data.results[0].category_id
        const totalResults = data.paging.total
        const sbfilters = data.available_filters
        const filteredData = filter(data.results, filters);

        return { filteredData, dataCategory, totalResults, sbfilters };

    } catch (error) {
        console.log(error)
    }
}

export default useGetData2;