import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartFinish = ()=>{
    const {listaEntada} = useContext(CartContext)
    return (
    <div>
        {

            listaEntada.map(le=>{

                return (
                <div>
                    <p>{le.name}</p>
                    <p>{le.price}</p>
                </div>
                )
            })
        }
    </div>
    )
}

export default CartFinish;