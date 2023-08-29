import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
  <div className="vh-100 d-flex flex-column">
    <Navbar/>

    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
    </Routes>
  </div>
    )
}

export default App;

