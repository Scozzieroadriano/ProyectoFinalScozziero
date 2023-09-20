export const getCartQuantity = (cart) =>{
    return cart.reduce((acc, item) => acc + item.quantity,0)
}

export const getCartTotal = (cart) =>{
    return cart.reduce((acc, item) => acc + item.quantity * item.price,0)
}
export const subtotal = (cart) =>{
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
export const mapCartToOrderItems = (cart) =>{
    return cart.map(item => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        title: item.title,
    }))
}
export const handleQuantityChange = (newValue, setQuantityToAdd) => {
    setQuantityToAdd(newValue);
};

// Función para agregar un producto al carrito con verificación de stock
export const handleAddToCart = (item, quantityToAdd, addItem) => {
    if (item.stock < item.quantity + quantityToAdd) {
        alert('No hay suficiente stock disponible.');
    } else {
        addItem(item, quantityToAdd);
    }
};
export const acumulateQuantity = (quantity) => {
    return quantity++
}