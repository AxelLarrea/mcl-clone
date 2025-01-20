import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import useGetData from "../hooks/useGetData";
import Header from "../components/Header";
import Footer from "../components/Footer";


const questions = 'https://api.mercadolibre.com/questions/search?item_id=MLA1469113567'
const description = 'https://api.mercadolibre.com/items/MLA1469113567/description'

const Product = () => {

    const { id } = useParams()
    const url = `https://api.mercadolibre.com/items/${id}`

    const { data } = useQuery({
        queryKey: ['product', id],
        queryFn: () => useGetData(url, null, null, 'product', null),
    })

    console.log('item data: ', data)

    return (
		<>
			<Header/>

			<div className="product-content-wrapper">
				<div className="product-content-header">
					{/* Category path */}
					<div className="aside-category-path">
						<span>Volver </span>
						<ul>
							{
								// data?.path_from_root.map((item, index) => (
								//     <li key={index}>
								//         <a href="#">
								//             <span> {item.name} </span>
								//         </a>

								//         <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000">
								//             <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								//             <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.43200000000000005"></g>
								//             <g id="SVGRepo_iconCarrier"> 
								//                 <path d="M10 7L15 12L10 17" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
								//                 </path> 
								//             </g>
								//         </svg>
								//     </li>
								// ))
							}
						</ul>
					</div>

					<div className="product-content-header-btn">
						<span>Vender uno igual</span>
						<span>Compartir</span>
					</div>
				</div>
				
				<div className="product-content">
					<div className="product-main">
						<section className="product-pictures">
							
							<div className="product-main-thumbnails">
								{/* {data?.pictures.map((image, index) => (
									<img key={index} src={image.secure_url} alt="" />
								// ))} */}
							</div>
							
							<div className="product-main-image">
								{/* <img src={data?.thumbnail} alt="" /> */}
							</div>
						</section>

						<section className="seller-products">
							{/* Slider */}
							<button className="see-more-specs-btn">
								Ir a la página del vendedor
								{/* svg */}
							</button>
						</section>
									
						<section className="product-specs">
							<h2>Características del producto</h2>
							<div className="specs-wrapper">
								{/* {data?.specs.map((spec, index) => (
                                    <div key={index} className="spec">
                                        <div className="spec-title">{spec.name}</div>
                                        <div className="spec-value">{spec.value_name}</div>
                                    </div>
                                // ))} */}
							</div>
							<button className="see-more-specs-btn">
								Ver todas las caracteristicas
								{/* svg */}
							</button>
						</section>
						
						<section className="product-description">
							<h2>Descripción</h2>
							<p> Le texto </p>
							<button className="see-more-specs-btn">
								Ver descripción completa
								{/* svg */}
							</button>
						</section>
						
						<section className="product-questions">
							<h2>Preguntas</h2>
							<div className="product-questions-to-know">
								<div className="questions-to-know">Costo y tiempo de envío</div>
								<div className="questions-to-know">Devoluciones gratis</div>
								<div className="questions-to-know">Medios de pago y promociones</div>
								<div className="questions-to-know">Garantía</div>
								<div className="questions-to-know">Cuotas sin tarjeta</div>
							</div>

							<div className="product-questions-doubts">
								<div className="questions-doubts">
									<span>¿Tenés dudas?</span>
									<span>X</span>
								</div>
								<span>Estos atajos te ayudarán a encontrar lo que buscás.</span>
							</div>
							
							<section className="make-a-question">
                                <form>
                                    <input type="text" placeholder="Escribí tu pregunta..." />
                                    <button>Preguntar</button>
                                </form>
							</section>

							<section className="questions-n-answers">
								<h3>Últimas realizadas</h3>

								<div className="question-container">
									<div className="question">
										<span>La pregunta en cuestión</span>
									</div>

									<div className="answer">
                                        <span>Respuesta de la pregunta</span>
                                    </div>

								</div>

								<button className="see-more-specs-btn">
									Ver todas las preguntas
									{/* svg */}
								</button>
							</section>

						</section>

					</div>

					<aside className="product-content-sidebar">
						<div className="product-sidebar-info"></div>
						<div className="product-sidebar-info"></div>
						<div className="product-sidebar-info"></div>
					</aside>
				</div>
				
				<h2>Quienes vieron este producto también compraron</h2>
				{/* Slider */}

				<h2>Quienes compraron este producto también compraron</h2>
				{/* Slider */}

			</div>

			<Footer/>
		</>
    );
}
 
export default Product;
