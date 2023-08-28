import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ItemList= ({ items }) => {
    return (
        <div>
            <h1>ItemList</h1>

            <ul>
                {items.map((item) =>(
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <p>{item.category}</p>
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