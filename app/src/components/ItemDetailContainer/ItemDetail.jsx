import { PropTypes} from "prop-types";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
const ItemDetail = ({item}) => {
    if (!item) {
        return <LoadingCircle/>;
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