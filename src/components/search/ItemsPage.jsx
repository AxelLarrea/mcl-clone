import '../../styles/search/itemsPage.css';

const ItemsPage = ({ totalResults }) => {

    const totalBtns = Math.ceil(totalResults / 50)
    const cant = Array.from({ length: totalBtns }, (v, i) => i);

    // probar si funciona con el index del botón
    const handleClick = (index) => {
        const btn = document.querySelector('.items-page-btn.numbers');
        console.log(btn)
    }
    
    return (
        <div className="items-page-wrapper">
            <ul>
                <li className="items-page-btn prev-page-btn"> Anterior </li>
                
                {   cant.map((item, index) => (
                        <li key={index+1} className="items-page-btn numbers" onClick={() => handleClick(index+1)}>{ index + 1 }</li>
                    )) 
                }

                <li className="items-page-btn next-page-btn"> Siguiente </li>
            </ul>
                
            
        </div>
    );
}
 
export default ItemsPage;