import { PropTypes } from "prop-types";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

const ItemDetail = ({item, isLoading, addItem}) => {
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
                        <img className="img-fluid align-self-center mx-auto" src={item.imageId} alt="" />
                    </div>
                        <div className="col-md-5 align-self-center text-center">
                            <h1 className="card-title">{item.title}</h1>
                            <div className="card-text">
                            <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">                        
                        <div className="col-md-12 text-center border-black">
                            <span className="text-muted fs-4">Precio: </span>
                            <span className="text-success fw-bold fs-4">$ {item.price.toFixed(2)}</span>                           
                        </div>                        
                    </div>
                    <button onClick= {() => addItem(item, 1)}> Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}
ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func
}

export default ItemDetail;