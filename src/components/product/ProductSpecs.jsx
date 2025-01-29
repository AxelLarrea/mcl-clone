import '../../styles/product/productSpecs.css';

const ProductSpecs = ({ specs }) => {
    
    const handleSeeMore = () => {
        const section = document.querySelector('.specs-bottom-section')
        const btn = document.querySelector('.see-more-specs-btn')
        
        section.classList.toggle('show-specs')
        btn.classList.toggle('rotate-see-more-btn')
    }

    return ( 
        <section className="product-specs">
            <h2>Características del producto</h2>

            <div className="specs-wrapper">
                
                <div className="specs-upper-section">

                    {   specs?.slice(0,6).map((spec, index) => (
                        <div key={index} className="spec">
                            <img src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/default.svg" alt="specs-check" />
                            <div className="spec-title">{spec.name}: </div>
                            <div className="spec-value">{spec.value_name}</div>
                        </div>
                        ))
                    }

                </div>


                <div className="specs-bottom-section">

                    <div className="specs-bottom-table-wrapper">
                        <h3>Características generales</h3>
                        <table className="specs-bottom-table">
                            <tbody>
                                {   specs?.slice(6, 9).map((spec, index) => (
                                        <tr key={index}>
                                            <th>{spec.name} </th>
                                            <td>{spec.value_name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="specs-bottom-table-wrapper">
                        <h3>Características técnicas</h3>
                        <table className="specs-bottom-table">
                            <tbody>
                                {   specs?.slice(9, 12).map((spec, index) => (
                                        <tr key={index}>
                                            <th>{spec.name} </th>
                                            <td>{spec.value_name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            
            <button className="see-more-specs-btn" onClick={handleSeeMore}>
                Ver todas las caracteristicas
                <svg fill="#3483fa" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xmlSpace="preserve" stroke="#3483fa">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g> <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"></path>
                        </g>
                    </g>
                </svg>
            </button>
        </section>
    );
}

export default ProductSpecs;