import '../../styles/general/bottomMostSearched.css'

const productos = [ "Aire Acondicionado", "Aire Acondicionado Frio Calor", "Aire Acondicionado Inverter", "Aire Acondicionado Split",
    "Apple Iphone", "Auriculares Jbl", "Calefon", "Celulares Samsung", "Cocina Gas","Cocinas", "Freezer", "Freidora Aire", 
    "Freidora Sin Aceite", "Heladera", "Heladera Bajo Mesada", "Heladera Con Freezer", "Heladera Kohinoor",
    "Heladera No Frost", "Heladera No Frost Samsung", "Heladera Samsung", "Iphone 14", "Iphone 14 Pro Max",
    "Iphone 15", "Iphone 15 Pro Max", "Lavarropas", "Lavarropas Automatico", "Lavarropas Drean", "Lavarropas Samsung",
    "Lavasecarropas", "Microondas", "Notebook", "Parlantes", "Procesadora", "Reloj Inteligente", "Reloj Smart Watch",
    "Samsung", "Secador De Pelo", "Smart Tv", "Smart Tv 43 Pulgadas", "Starlink Internet", "Tablets",
    "Televisor 50 Pulgadas", "Televisores Smart", "Termotanque Electrico", "Tostadoras Electricas", "Tv 50 Pulgadas",
    "Tv 55 Pulgadas", "Ventiladores", "Yogurtera", "Samsung A54" ]

const BottomMostSearched = () => {
    return (
        <>
            <div className="bottom-most-searched">
                <h4>Productos más buscados</h4>
                <ul>
                    {
                        productos.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}
    
export default BottomMostSearched;