import { PropTypes } from "prop-types";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const ItemDetail = ({item, isLoading}) => {
    if (isLoading) {
        return <LoadingCircle/>;
    }
    if (!item) {
        return <h3>Producto no encontrado</h3>
    }
    return (
        <div className="container mt-4">
            <div className="card shadow-lg">
                <div className="card-body">
                    <div className="row justify-content-center">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img className="img-fluid align-self-center mx-auto" src={item.image} alt="" />
                    </div>
                        <div className="col-md-5 align-self-center text-center">
                            <h1 className="card-title">{item.name}</h1>
                            <p className="card-text">
                                <span className="text-muted fs-4">Precio: </span>
                                <span className="text-success fw-bold fs-4">${item.price.toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">                        
                        <div className="col-md-12 text-center border-black">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool
}

export default ItemDetail;