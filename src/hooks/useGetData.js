import { useState, useEffect } from 'react';
import axios from 'axios';


const useGetData = (url) => {

    const [data, setData] = useState();

    const getDataHook = async () => {
        try {
            const response = await axios.get(url)
            const data = await response.data
            console.log(data)
            setData(data)
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