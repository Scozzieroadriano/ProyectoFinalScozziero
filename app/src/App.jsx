import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import CartProvider from './context/CartProvider';
function App() {

  return (
  <CartProvider> 
    <Navbar/>

    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
  </CartProvider>
    )
}

export default App;

