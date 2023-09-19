import { useContext, useState } from 'react';
import CartContext from "../../context/CartContext";
import ProductCount from '../ProductCount/ProductCount';
import styles from './Cart.module.css';
import { getCartTotal } from '../../utils';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, addItem, removeItem } = useContext(CartContext);
    const [quantityToAdd, setQuantityToAdd] = useState(1);

    const handleQuantityChange = (newValue) => {
        setQuantityToAdd(newValue);
    };

    const handleAddToCart = (item) => {
        if (item.stock < item.quantity + quantityToAdd) {
            alert('No hay suficiente stock disponible.');
        } else {
            addItem(item, quantityToAdd);
        }
    };

    return (
        <div className={`container ${styles.contenedorPrincipal} mt-5`}>
            <ul className="list-group">
                {cart.map((item) => (
                    <li key={item.id} className={`list-group-item d-flex justify-content-between align-items-center m-4 `}>
                        <img className={`${styles.customImageList} me-3`} src={item.imageId} alt="..." />
                        <span className="me-1">Producto: {item.title}</span>
                        <span className="badge bg-primary rounded-pill">Cantidad : {item.quantity}</span>
                        <ProductCount
                            initialValue={quantityToAdd}
                            onValueChange={handleQuantityChange}
                        />
                        <button className="btn btn-success me-2" onClick={() => handleAddToCart(item)}>Agregar</button>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-center mt-3">
                <Link to="/checkout">
                    <button className="btn btn-primary p-3">Continuar Compra</button>
                </Link>
            </div>
            <p className="mt-3 p-3 text-end">
                Total de la compra: ${getCartTotal(cart).toFixed(2)}
            </p>
        </div>
    );
}

export default Cart;
