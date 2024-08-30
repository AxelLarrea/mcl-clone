

const ThreeCatsItem = ({ link, title, thumbs }) => {

    return (
        <>
            <div className="three-categories-item">
                
                <div className="title">
                    <h3>{ title }</h3>
                </div>
                
                <div className="image">
                    <img src={link} alt="imagen correspondiente a la categoría"/>
                </div>
                
                <div className="thumbnails">
                    {
                        thumbs && thumbs.map( (thumb, key) => (
                            <div className="thumb" key={key}>
                                <img src={thumb} alt="" />
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
}
 
export default ThreeCatsItem;