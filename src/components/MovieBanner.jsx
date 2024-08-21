import '../styles/movieBanner.css'


const MovieBanner = () => {
    return (
        <>
            <div className="movie-banner-wrapper">
                
                <img src="https://http2.mlstatic.com/D_NQ_803027-MLU74643615266_022024-OO.webp" alt="background image" />

                <div className='movie-banner-info'>

                    <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/touchpoint_trailer/logo-mercado-play-v3.png" alt="mercadoplay logo" />
                    
                    <div className='text-container'>
                        <h2>Ahora podés ver series y películas</h2>
                        <span>GRATIS</span>
                    </div>

                    <button>Ir a Mercado Play</button>

                </div>
                
                <div className='movie-banner'>
                    <img src="https://http2.mlstatic.com/D_NQ_908278-MLA77634269219_072024-OO.webp"></img>
                </div>

            </div>
        </>
    );
}
 
export default MovieBanner;