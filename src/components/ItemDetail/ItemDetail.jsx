// import { useContext, useState } from "react"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import { ItemCount } from '../ItemCount/ItemCount';
import "./ItemDetail.css"


export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addEntrada } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addEntrada(data, quantity)
    }


    return (
        <div className="container">
            <div className="detail">
                <img src={data.img} width={300} height={300} />
                <div className="content">
                    <h1>Detalle de Entrada - <span>{data.title}</span></h1>
                    <article className="artic">{data.desc}</article>
                    {
                        goToCart
                            ? <Link to="/cart">Terminar compra</Link>
                            : <ItemCount initial={2} stock={6} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;