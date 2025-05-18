import axios from 'axios';
import { useTokenStore } from '../../utils/store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const Callback = () => {

    const { setToken } = useTokenStore()
    

    const fetchToken = async () => {
        try {
            const response = await axios.get('https://mcl-clone.vercel.app/api/getToken');
            console.log('response en Search: ', response);
            return response;
        } catch (error) {
            console.log('error en fetchToken: ', error);
        }
    };
    
    const { data: token } = useQuery({
        queryKey: ['token'],
        queryFn: fetchToken,
    })

    console.log('token: ', token);

    useEffect(() => {
        if (token) {
            setToken(token)
            window.location.href = '/'
        }
    }, [token, setToken])

    return (
        <div>
            <h1>Callback xdd</h1>
        </div>
    );
}
 
export default Callback;