const TwoOffersCard = ({  imgUrl, firstText, secondText, thirdText }) => {
    return (
        <>
            <div className="two-offers-card">
                <div className="two-offers-info">
                    <span>{ firstText }</span>
                    
                    <div className="two-offers-middle-text">
                        <span>{ secondText }</span>
                        <span>{ thirdText }</span>
                    </div>
                    <button>VER MÁS</button>
                </div>
                <div className='two-offers-image'>
                    <img src={imgUrl} alt="offer image"/>
                </div>
            </div>
        </>
    );
}
 
export default TwoOffersCard;