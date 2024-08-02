import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import Header from '../components/Header';

const ItemList = () => {

    const [items, setItems] = useState()

    async function getItems() {
        try {
            const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=samsung&limit=10')
            setItems(response.data.results) // cambiar luego para agregar los filtros
            console.log(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <>
            <Header />

            <section className="items-container">
                { items && items.map( item => (
                    <Item 
                        key={item.id}
                        item={item}
                    />
                    )
                )}
            </section>
        </>
    );
}
 
export default ItemList;