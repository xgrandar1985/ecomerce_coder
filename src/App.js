import './App.css';
import Home from './componentes/Home';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import CartContainer from './componentes/CartContainer';
import { CartProvider } from './componentes/context/CartContext';
import OrderContainer from './componentes/OrderContainer';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
            <div className="App">
                <div>
                <NavBar/>
                    <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path="/productos" element={<ItemListContainer greeting="Lista de Productos de Anime"/>}/>
                      <Route path='/productos/:id' element={<ItemDetailContainer/>}/>  
                      <Route path='/items/:tipo' element={<ItemListContainer greeting=" "/>}/> 
                      <Route path="/carrito" element={<CartContainer/>}/>
                      <Route path='/ordenes/:ordenid' element={<OrderContainer/>}/> 
                    </Routes>
                </div>
            </div>
            </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
