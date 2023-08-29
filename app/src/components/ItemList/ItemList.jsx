import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './ItemList.module.css'

const ItemList = ({ items }) => {
    return (
        <div className={`container ${styles.contenedorPrincipal}`}>
            <h1>ItemLista</h1>
            <ul className='container row g-3 mt-2 justify-content-start'>
                {items.map((item) => (
                    <li key={item.id} className={`container col-5 col-lg-3 card text-center shadow-lg ${styles.cardProduct} mx-2`}>
                        <Link to={`/item/${item.id}`}>
                            <img className="card-img-top" src={`./${item.image}`} alt="..." />
                            <h5 className={`card-title ${styles.decorationNone}`}>{item.name}</h5>
                            <hr />
                            <p className='card-text'>${item.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
ItemList.propTypes = {
    items: propTypes.array.isRequired
}

export default ItemList;