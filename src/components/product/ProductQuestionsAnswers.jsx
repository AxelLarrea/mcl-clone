import { useState } from 'react';
import '../../styles/product/productQuestionsAnswers.css';

const ProductQuestionsAnswers = ({ questions }) => {
    
    const [limitComments, setLimitComments] = useState(2)
    const filteredQuestions = questions?.filter( question => question.status !== 'BANNED')

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleString('es-AR').split(',')[0];
    }

    const handleClick = () => {
        setLimitComments(prev => prev === 2 ? filteredQuestions.length - 1 : 2)
        const section = document.querySelector('.questions-n-answers')
        const btn = document.querySelector('.see-more-specs-btn.question')

        section.classList.toggle('hide')
        btn.classList.toggle('rotate-see-more-btn')
    }

    return (
        <section className="product-questions">
            <h2>Preguntas y respuestas</h2>

            <section className="product-questions-to-know">
                <h2>¿Qué querés saber?</h2>
                <div className="questions-to-know-wrapper">
                    <div className="questions-to-know">Costo y tiempo de envío</div>
                    <div className="questions-to-know">Devoluciones gratis</div>
                    <div className="questions-to-know">Medios de pago y promociones</div>
                    <div className="questions-to-know">Garantía</div>
                    <div className="questions-to-know">Cuotas sin tarjeta</div>
                </div>
            </section>

            <section className="make-a-question">
                <input type="text" name="make-cuestion" placeholder="Escribí tu pregunta..." autoComplete='off'/>
                <button>
                    <svg height="14px" width="14px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#fff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g> 
                                <path d="M494.696,155.436l-75.664-19.918c-24.946-6.56-44.421-26.036-50.982-50.963L348.142,8.892 C346.769,3.647,342.032,0,336.618,0c-5.424,0-10.161,3.647-11.542,8.892l-19.908,75.664c-6.56,24.927-26.036,44.402-50.982,50.963 l-75.664,19.918c-5.245,1.381-8.892,6.109-8.892,11.533c0,5.424,3.647,10.151,8.892,11.534l75.664,19.917 c24.946,6.552,44.422,26.036,50.982,50.963l19.908,75.665c1.381,5.245,6.119,8.892,11.542,8.892c5.414,0,10.151-3.647,11.524-8.892 l19.907-75.665c6.561-24.927,26.036-44.411,50.982-50.963l75.664-19.917c5.244-1.382,8.892-6.11,8.892-11.534 C503.587,161.546,499.94,156.818,494.696,155.436z"></path> 
                                <path d="M207.001,402.949l-46.226-12.163c-15.236-4.004-27.136-15.904-31.14-31.13l-12.172-46.226 c-0.837-3.215-3.723-5.432-7.041-5.432c-3.308,0-6.203,2.218-7.04,5.432l-12.163,46.226c-4.014,15.226-15.913,27.126-31.149,31.13 l-46.226,12.163c-3.196,0.846-5.432,3.741-5.432,7.049c0,3.309,2.237,6.204,5.432,7.049l46.226,12.163 c15.236,4.004,27.136,15.904,31.149,31.131l12.163,46.226c0.836,3.215,3.732,5.433,7.04,5.433c3.318,0,6.204-2.218,7.041-5.433 l12.172-46.226c4.004-15.227,15.904-27.127,31.14-31.131l46.226-12.163c3.196-0.845,5.432-3.74,5.432-7.049 C212.434,406.69,210.197,403.795,207.001,402.949z"></path> 
                            </g> 
                        </g>
                    </svg>
                    Preguntar
                </button>
            </section>

            {   filteredQuestions?.length >= 1 && 
                <section className="questions-n-answers">
                    <h3>Últimas realizadas</h3>

                    {   filteredQuestions?.slice(0, limitComments).map( (question, index) => (
                            <div className="question-container" key={index}>
                                <div className="question">
                                    <span>{ capitalizeFirstLetter(question.text) }</span>
                                    <a href="#">Denunciar</a>
                                </div>

                                <div className="answer">
                                    <span>{ capitalizeFirstLetter(question.answer.text) }</span>
                                    <div className="answer-date">
                                        <span className="date">{ formatDate(question.answer.date_created) }</span>
                                        <a href="#">Denunciar</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </section>
            }

            {   questions?.length > 2 &&
                <button className="see-more-specs-btn question" onClick={handleClick}>
                    Ver todas las preguntas
                    <svg fill="#3483fa" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xmlSpace="preserve" stroke="#3483fa">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g> <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
            }

        </section>
    );
}
 
export default ProductQuestionsAnswers;