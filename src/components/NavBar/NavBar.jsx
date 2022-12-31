import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom";
import "./NavBar.scss"

const NavBar = ({ menus, categorias }) => {
    return (
        <div>
            <nav className="nav">
                    <NavLink className="navbar__category" to="/">Inicio</NavLink>
                <ul className="navbar__category"> 
                    <li>
                        <NavLink className="navbar__category" to="/categoria/Rock">Rock</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar__category" to="/categoria/Reggae">Reggae</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar__category" to="/categoria/Electronica">Electronica</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar__category" to="/categoria/Cumbia">Cumbia</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar__category" to="cart">
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;