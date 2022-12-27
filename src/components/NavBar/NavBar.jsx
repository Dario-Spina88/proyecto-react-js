import {Link} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.scss"

const NavBar = ({menus, categorias}) => {
    return(
        <div className="navbar">
            {
                menus.map((menu)=>{
                    return <Link className="navbar__menu" to={menu.href} >{menu.name}</Link>;
                })
            }
            <div>
            {
                categorias.map((categoria)=>{
                    return <Link to={`/category/${categoria.id}`} className="navbar__category-link">{categoria.name}</Link>
                })
            }
            </div>
            <CartWidget/>
        </div>)
}


export default NavBar;