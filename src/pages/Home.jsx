import { useState, useEffect } from 'react';
import axios from "axios";
import Item from '../components/Item';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Home = () => {
    
    const [items, setItems] = useState()

    async function getItems() {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=samsung')
        setItems(response.data.results) // cambiar luego para agregar los filtros
        console.log(response.data.results)
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <>
            <Header />
            
            { items && items.map( item => (
                <Item 
                    key={item.id}
                    item={item}
                />
                )
            )}

            <Footer />
        </>
    );
}
 
export default Home;
