

const Item = ({ item }) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.price}</p>
        </div>
    );
}
 
export default Item;
