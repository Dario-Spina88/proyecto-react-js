import React from "react"; 
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return(
        <div>
            <nav className="navbar">
                <ul>
                    <a href="#">Inicio</a>
                    <a href="#">Entrada</a>
                    <a href="#">Contacto</a>
                </ul>
            </nav>
            <div>
            <CartWidget/>
            </div>
        </div>
    )
}


export default NavBar;