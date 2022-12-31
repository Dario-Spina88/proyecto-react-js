import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./CartFinish.css"


const CartFinish = ({ entrada }) => {
    const {removeEntrada} = useCartContext();

            return (
                <div className="entrada__compra">
                    <img src={entrada.img} width={50} height={50} />
                    <p>Entrada: "{entrada.title}" </p>
                    <p>Cantidad: "{entrada.quantity}" </p>
                    <p>Precio unidad: ${entrada.price}</p>
                    <p>Subtotal: ${entrada.quantity * entrada.price}</p>
                    <button onClick={()=> removeEntrada(entrada.id)}>eliminar</button>
                </div>
            );
}

export default CartFinish