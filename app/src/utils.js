export const getCartQuantity = (cart) =>{
    return cart.reduce((acc, item) => acc + item.quantity,0)
}
