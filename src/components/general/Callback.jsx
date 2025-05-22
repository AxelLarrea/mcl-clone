import axios from 'axios';
import { useTokenStore } from '../../utils/store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const Callback = () => {

    const { setToken } = useTokenStore()
    const { searchParams } = new URL(window.location.href);
    const code = searchParams.get('code');
    const FETCH_URL = `/api/getToken?code=${code}`
    // const FETCH_URL = `http://localhost:3000/api/getToken?code=${code}`

    const fetchToken = async () => {
        try {
            const response = await axios.get(FETCH_URL);
            return response.data.token.access_token;
        } catch (error) {
            console.error('error en fetchToken: ', error);
        }
    };
    
    const { data: token } = useQuery({
        queryKey: ['token'],
        queryFn: fetchToken,
    })

    useEffect(() => {
        if (token) {
            setToken(token)
            window.location.href = '/'
        }
    }, [token, setToken])

    return (
        <div className="callback-wrapper">
            <h1>Cargando...</h1>
        </div>
    );
}
 
export default Callback;