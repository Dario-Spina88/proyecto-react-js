import {useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext}from "../Context/CartContext";
import "./Cart.css";

const Cart = ()=>{
    const {count} = useContext(CartContext)

    return(
        <div className="carrito">
            <img src="https://electrogar.com.ar/wp-content/uploads/2020/04/carro-de-compras.png" />
            <div className="cart__count">
                <p>{count}</p>
            </div>
                <Link to="/cart">Terminar compra</Link>
        </div>
    )
}

export default Cart;