import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { getCartTotal, mapCartToOrderItems } from '../../utils';
import { createOrder } from '../../services';
import LoadingCircle from '../LoadingCircle/LoadingCircle';
import OrderForm from '../OrderForm/OrderForm';
import styles from './Checkout.module.css'

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, clear } = useContext(CartContext);

    const total = getCartTotal(cart);

    const handleCheckout = ({ name, phone, email }) => {
        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };
        setIsLoading(true);
        createOrder(order)
            .then((docRef) => {
                setOrderId(docRef.id);
                setIsLoading(false);
                clear();
            });
    };

    return (
        <div className="container mt-5">
            <h3>Resumen de la compra</h3>

            {orderId && (
                <>
                    <h2 className={`${styles.successMessage}`}>COMPRA EXITOSA!</h2>
                    <p className={`${styles.orderMessage}`}>El id de la orden es : {orderId}</p>
                    <p className={`${styles.thankYouMessage}`}>¡Muchas gracias por confiar!</p>
                </>
            )}

            {!orderId && (
                <div className={`${styles.checkoutContainer}`}>
                    <div className={`${styles.checkoutList}`}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio por unidad</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-end">
                            <p>Total: ${getCartTotal(cart).toFixed(2)}</p>
                        </div>
                    </div>
                    {isLoading ? <LoadingCircle /> : <>
                        <div className={`${styles.checkoutForm}`}>
                            <OrderForm handleCheckout={handleCheckout} />
                        </div>
                    </>}

                </div>
            )}
        </div>
    );
};

export default Checkout;
