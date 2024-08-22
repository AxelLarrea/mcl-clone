import axios from "axios"


const getData = async (url) => {
    
    try {
        const response = await axios.get(url)
        const data = await response.data.images
        
        return data
    } catch (error) {
        console.log(error)
    }

}

export default getData