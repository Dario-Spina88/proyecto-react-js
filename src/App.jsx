import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CartProvider from "./Context/CartContext"


function App(){
    return(
        <div>
        <BrowserRouter className="App">
            <CartProvider>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>} />
                <Route exact path="/cart" element={<Cart/>} />
                <Route exact path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
            </Routes>
            </CartProvider>
            <Footer/>
        </BrowserRouter>
        </div>
    );
}

export default App;