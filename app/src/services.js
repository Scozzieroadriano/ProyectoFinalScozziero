const products = [
    { id: "1", name: "Kit Marvo - Cm310 W", price: 14942, category: "teclados", image: "../public/images/products/teclados/marvo-cm310-kit-blanco.jpg", description: "Un kit de teclado y mouse Marvo en color blanco, ideal para tus sesiones de juego." },
    { id: "2", name: "Kit Marvo - Cm310 B", price: 12932, category: "teclados", image: "../public/images/products/teclados/marvo-cm310-kit.jpg", description: "Un kit de teclado y mouse Marvo en color negro, perfecto para mejorar tu experiencia de juego." },
    { id: "3", name: "Marvo P250M", price: 3450, category: "teclados", image: "../public/images/products/teclados/teclado-marvo-kg917-1.jpg", description: "El teclado Marvo P250M ofrece un diseño elegante y funcionalidad avanzada para tus necesidades de escritura y juego." },
    { id: "4", name: "Redragon K552", price: 7450, category: "teclados", image: "../public/images/products/teclados/redragon-k552.jpg", description: "El teclado mecánico Redragon K552 está diseñado para brindarte una experiencia de escritura y juego precisa y satisfactoria." },
    { id: "5", name: "VSG Anlitak-Red", price: 15660, category: "teclados", image: "../public/images/products/teclados/vsg-alnitak-red.jpg", description: "El teclado mecánico VSG Anlitak-Red combina un diseño moderno con interruptores táctiles para una respuesta rápida en cada pulsación." },
    { id: "6", name: "Pc Gamer Ryzen 3 3200g 8gb ram 240gb ssd", price: 238151, category: "pcs", image: "../public/images/products/pcs/combo-ryzen-3.jpg", description: "Una PC gamer con procesador Ryzen 3 3200G, 8GB de RAM y un SSD de 240GB para una experiencia de juego fluida." },
    { id: "7", name: "Pc Gamer Ryzen 9 7900x Rtx 4070 32gb ram 500gb ssd", price: 2128392, category: "pcs", image: "../public/images/products/pcs/combo-ryzen-9.jpg", description: "La PC gamer definitiva con un procesador Ryzen 9 7900X, GPU RTX 4070, 32GB de RAM y un SSD de 500GB para un rendimiento extremo." },
    { id: "8", name: "Pc Gamer Ryzen 5 4800g 8gb ram 480gb ssd", price: 268151, category: "pcs", image: "../public/images/products/pcs/combo-ryzen-5.jpg", description: "Una PC gamer con procesador Ryzen 5 4800G, 8GB de RAM y un SSD de 480GB para tus juegos y tareas multimedia." },
    { id: "9", name: "Pc Gamer Intel i3 10100f 8gb ram 240gb ssd", price: 197960, category: "pcs", image: "../public/images/products/pcs/combo-i3.jpg", description: "Un equipo de juego con procesador Intel Core i3 10100F, 8GB de RAM y un SSD de 240GB para una experiencia de juego estable." },
    { id: "10", name: "Pc Gamer Intel i5 11400g 16gb ram 1tb ssd", price: 473760, category: "pcs", image: "../public/images/products/pcs/combo-i5.jpg", description: "Una PC gamer con procesador Intel Core i5 11400G, 16GB de RAM y un SSD de 1TB para disfrutar de tus juegos favoritos." },
    { id: "11", name: "Monitor 19'' Philips Vga Hdmi Hd", price: 58500, category: "monitores", image: "../public/images/products/monitores/monitor-19-prime.jpeg", description: "El monitor Philips de 19 pulgadas ofrece una calidad de imagen nítida y opciones de conectividad versátiles." },
    { id: "12", name: "Monitor 24'' Philips Full Hd Hdmi", price: 71250, category: "monitores", image: "../public/images/products/monitores/monitor-24-prime.jpeg", description: "Disfruta de contenido en Full HD con el monitor de 24 pulgadas de Philips, perfecto para trabajo y entretenimiento." },
    { id: "13", name: "Monitor 24'' Samsung T350h Full Hd Hdmi", price: 100300, category: "monitores", image: "../public/images/products/monitores/monitor-asus-gaming-165hz-0.5ms-1.jpg", description: "El monitor Samsung T350h ofrece una experiencia visual impresionante con resolución Full HD, perfecto para gamers y creativos." },
    { id: "14", name: "Monitor Asus Gaming Vg248qg 24 165hz 0.5ms", price: 291300, category: "monitores", image: "../public/images/products/monitores/monitor-samsung-24-prime.jpeg", description: "El monitor Asus Gaming Vg248qg de 24 pulgadas te sumergirá en tus juegos con su alta tasa de refresco y tiempo de respuesta rápido." },
    { id: "15", name: "Monitor Msi Gaming Optix G24c 24 Curvo 1800r 144hz 1ms", price: 311300, category: "monitores", image: "../public/images/products/monitores/msi-gaming-curvo-1800r-144hz-1ms-1.jpg", description: "El monitor MSI Gaming Optix G24c de 24 pulgadas y curvatura 1800r te ofrece una experiencia de juego envolvente con su alta tasa de refresco y tiempo de respuesta rápido." },
];
//getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //busco el producto por id
            const product = products.find(p => p.id === id);
            //si existe el productomonitores
            if (product) {
                resolve(product)
            } else {
                reject('No existe el producto')
            }
        }, 1200);
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

        }, 1200)
    })
}