import { useState, useEffect } from 'react';
import getData from '../utils/getData';

const useGetData = (url) => {

    const [data, setData] = useState();

    const getDataHook = async () => {
        try {
            const response = await getData(url)
            
            setData(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataHook()
    }, [])
    
    return data;
}
 
export default useGetData;