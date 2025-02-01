import '../../styles/home/adBanner.css'

const AdBanner = () => {
    return (
        <>
            <div className="ad-banner-wrapper">

                <div className='ad-image'>
                    <img src="https://http2.mlstatic.com/D_NQ_929074-MLA76244397248_052024-OO.jpg" alt="ad image" />
                </div>

                <div className='ad-info'>

                    <div className='ad-logo'>
                        <div>
                            <img src="https://http2.mlstatic.com/D_NQ_722575-MLA76026955698_052024-OO.jpg" alt="brand's logo" />
                        </div>
                    </div>

                    <div className='ad-text'>
                        <div className='little-text'>
                            <span>CONOCE</span>
                        </div>

                        <div className='bigger-text'>
                            <span>NUESTRO CATÁLOGO DE PRODUCTOS</span>
                        </div>

                        <div className='ad-link'>
                            <a href="#">IR A TIENDA</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default AdBanner;