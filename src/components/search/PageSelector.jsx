import { useFilterStore } from '../../utils/store';
import '../../styles/search/pageSelector.css';

const PageSelector = ({ totalResults }) => {

    const totalBtns = Math.ceil(totalResults / 50)
    const cant = Array.from({ length: totalBtns < 20 ? totalBtns : 20 }, (v, i) => i);

    const { page, setPage, pageRange, setPageRange } = useFilterStore();

    const handleNext = () => {
        if (page === pageRange[1]) setPageRange([pageRange[0] + 10, pageRange[1] + 10])
        setPage(page + 1)
    }

    const handlePrev = () => {
        if (page === pageRange[0] + 1) setPageRange([pageRange[0] - 10, pageRange[1] - 10])
        setPage(page - 1)
    }

    return (
        <div className="items-page-wrapper">
            <ul>
                <li 
                    className={`items-page-btn prev-page-btn ${page > 1 ? 'active-dir' : ''}`}
                    onClick={handlePrev}
                > 
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="rgba(0, 0, 0, 0.7)">
                        <path d="M12.6287 5.19496L7.83304 9.99059L12.6337 14.7912L11.7851 15.6397L6.13599 9.99059L11.7801 4.34644L12.6287 5.19496Z" fill="rgba(0, 0, 0, 0.7)"></path>
                    </svg>
                    <span>Anterior</span> 
                </li>
                
                {   cant.slice(pageRange[0], pageRange[1]).map((item, index) => (
                        <li 
                            key={ index } 
                            className={`items-page-btn numbers ${page - 1 === item ? 'active' : ''}`}
                            onClick={() => setPage(item + 1)}
                        > 
                            { item + 1 }
                        </li>
                    )) 
                }

                <li 
                    className={`items-page-btn next-page-btn ${page < cant.length ? 'active-dir' : ''}`}
                    onClick={handleNext}
                >
                    <span>Siguiente</span> 
                    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="rgba(0, 0, 0, 0.7)">
                        <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="rgba(0, 0, 0, 0.7)"></path>
                    </svg>
                </li>
            </ul>
        </div>
    );
}
 
export default PageSelector;