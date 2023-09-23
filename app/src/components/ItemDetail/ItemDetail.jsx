import { PropTypes } from "prop-types";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import React, { useState } from "react";


const ItemDetail = ({ item, isLoading, addItem }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0);

    if (isLoading) {
        return <LoadingCircle />;
    }
    if (!item) {
        return <h3>Producto no encontrado</h3>
    }

    const handleAddToCartClick = () => {
        if (quantityToAdd < item.stock) {
            setQuantityToAdd(quantityToAdd + 1);
            addItem(item, 1);
        }
    };

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
                    <div className="col-md-12 text-center mt-2">
                        <button
                            className={`btn btn-success me-2 ${quantityToAdd >= item.stock ? "disabled" : ""
                                }`}
                            onClick={handleAddToCartClick}
                            disabled={quantityToAdd >= item.stock}
                        >
                            {quantityToAdd >= item.stock
                                ? "Sin Stock"
                                : "Agregar" }
                        </button>

                    </div>
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