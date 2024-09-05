import { useState, useEffect } from 'react';
import axios from 'axios';


const useGetData = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const getDataHook = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(url)
            const data = await response.data
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getDataHook()
    }, [url])
    
    return { data, isLoading };
}

export default useGetData;