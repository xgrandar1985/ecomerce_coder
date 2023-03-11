import './App.css';
import Home from './componentes/Home';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';

function App() {
  return (
    <>

<BrowserRouter>
        <div className="App">
            <div>
            <NavBar/>
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path="/productos" element={<ItemListContainer greeting="Lista de Productos de Anime"/>}/>
                  <Route path='/productos/:id' element={<ItemDetailContainer/>}/>  
                  <Route path='/items/:tipo' element={<ItemListContainer greeting=" "/>}/> 
                  <Route path="/carrito" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
