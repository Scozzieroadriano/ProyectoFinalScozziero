import { PropTypes} from "prop-types";
const ItemDetail = ({item}) => {
    if (!item) {
        return <h2>Producto no encontrado</h2>;
    }
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.category}</p>
        </div>
    )
}
ItemDetail.propTypes = {
    item: PropTypes.object,

}

export default ItemDetail;