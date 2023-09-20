import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { getCartQuantity } from "../../utils";
import swal from "sweetalert"; 

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = getCartQuantity(cart);

  const handleClick = () => {
    if (!quantity) {
      swal("Carrito Vacío", "Tu carrito está vacío.", "error");
    } 
  };

  return (
    <div>
      <button
        className="btn btn-outline-primary position-relative border-2" onClick={handleClick}>
        <i className="bi bi-cart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {!!quantity && quantity}
        </span>
        <span className="visually-hidden">productos en el carrito</span>
      </button>
    </div>
  );
};

export default CartWidget;
