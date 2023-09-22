import { useContext, useState } from 'react';
import CartContext from "../../context/CartContext";
import ProductCount from '../ProductCount/ProductCount';
import styles from './Cart.module.css';
import { getCartTotal, handleAddToCart, handleQuantityChange } from '../../utils';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, addItem, removeItem, clear } = useContext(CartContext);
    const [quantityToAdd, setQuantityToAdd] = useState(1);

    return (
        <div className={`container ${styles.contenedorPrincipal} mt-5`}>
            {cart.length === 0 ? (
                <div className="text-center m-5">
                    <h3>¡Tu carrito está vacío!</h3>
                    <p>Descubre nuestros productos:</p>
                    <Link to="/">
                        <button className="btn btn-primary m-5">Descubrir Productos</button>
                    </Link>
                </div>
            ) : (
                <>
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className={`list-group-item d-flex justify-content-between align-items-center m-4 ${styles.customListItem}`}>
                                <div className="d-flex align-items-center">
                                    <img className={`${styles.customImageList} me-5`} src={item.imageId} alt="..." />
                                    <span className="me-1">Producto: {item.title}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="badge bg-primary rounded-pill me-3">Cantidad : {item.quantity}</span>
                                    <ProductCount
                                        initialValue={quantityToAdd}
                                        onValueChange={(newValue) => handleQuantityChange(newValue, setQuantityToAdd)}
                                    />
                                    <button className="btn btn-success me-5 ms-5" onClick={() => handleAddToCart(item, quantityToAdd, addItem)}>Agregar</button>
                                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/checkout">
                            <button className="btn btn-primary p-2 me-3">Continuar Compra</button>
                        </Link>
                        <button className="btn btn-secondary p-2" onClick={() => clear(cart)}>Vaciar Carrito</button>

                    </div>
                    <p className="mt-3 p-3 text-end">
                        Total de la compra: ${getCartTotal(cart).toFixed(2)}
                    </p>
                </>
            )}
        </div>

    );
}

export default Cart;
