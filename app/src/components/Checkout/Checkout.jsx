import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { getCartTotal, mapCartToOrderItems } from '../../utils';
import { createOrder } from '../../services';
import LoadingCircle from '../LoadingCircle/LoadingCircle';

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart,clear } = useContext(CartContext);

    const total = getCartTotal(cart);

    const handleCheckout = () => {
        const order = {
            buyer: {
                name: "adriano",
                phone: "123321123",
                email: "scozziero@gmail.com",
            },
            items: mapCartToOrderItems(cart),
            total,
            date: serverTimestamp(),
        };
        setIsLoading(true);
        createOrder(order)
            .then((docRef) =>{
                setOrderId(docRef.id);
                setIsLoading(false);
                clear();
            })  
    }
    return (
        <div className="container mt-5">
            <h2>Resumen de la compra</h2>

            {orderId && <p>El id de la orden es: {orderId}</p>}
            {!orderId && (
                <>
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
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handleCheckout}>
                    Finalizar Compra
                </button>           
            </div>
            {isLoading && <LoadingCircle/>}
            </>
            )}
        </div>
    );
};

export default Checkout;
