import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom'
import styles from './ItemList.module.css'
import LoadingCircle from '../LoadingCircle/LoadingCircle'

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <LoadingCircle />
    }
    return (
        <div className={`container ${styles.contenedorPrincipal} vh-100`}>
            
            <h1 className="text-center">Lista de productos</h1>            
            
            <ul className='container row mt-3 justify-content-start p-3'>
                {items.map((item) => (
                    <li key={item.id} className={`col-5 col-lg-3 card text-center shadow-lg ${styles.cardProduct} mx-4 mb-3 p-3 d-flex flex-column`}>
                        <Link to={`/item/${item.id}`}>
                            <img className="card-img-top" src={`${item.imageId}`} alt="..." />
                            <h5 className={`card-title ${styles.decorationNone}`}>{item.title}</h5>
                            <div className="mt-auto align-self-end -mt-3">
                                <span className="text-muted fs-4">Precio: </span>
                                <span className="text-success fw-bold fs-4"> ${item.price.toFixed(2)}</span>
                            </div>
                        </Link>
                    </li>

                ))}
            </ul>
        </div>
    )
}
ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
}

export default ItemList;