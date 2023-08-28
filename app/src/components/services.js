const products = [
    { id: "1", name: "Iphone 12", price: 600, category: "telefonos"},
    { id: "2", name: "Iphone 13", price: 620, category: "telefonos"},
    { id: "3", name: "Iphone 14", price: 640, category: "telefonos"},
    { id: "4", name: "Iphone 15", price: 660, category: "telefonos"},
    { id: "5", name: "Ipad 12", price: 800, category: "tablets"},
    { id: "6", name: "Ipad 11", price: 780, category: "tablets"},
    { id: "7", name: "Ipad 10", price: 760, category: "tablets"},
    { id: "8", name: "Mac 9", price: 1200, category: "notebooks"},
    { id: "9", name: "Mac 8", price: 1250, category: "notebooks"},
    { id: "10", name: "Mac 7", price: 1300, category: "notebooks"}
]
//getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //busco el producto por id
        const product = products.find(p => p.id === id);
        //si existe el producto
        if (product) {
            resolve(product)
        } else {
            reject('No existe el producto')
        }

    },1500)
    })
}
//getProducts
export const getProducts = (category) => {
 return new Promise((resolve) => {
    setTimeout(() => {
        //si categoria existe filtramos por categoria
        //si categoria no existe devolvemos todos los productos


        const productsFiltered = category 
            ? products.filter(product => product.category === category)
            : products
        resolve(productsFiltered);
        
    },1500)
})
}