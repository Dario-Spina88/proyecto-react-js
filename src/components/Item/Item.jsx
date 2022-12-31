import { Link } from "react-router-dom"
import React from "react";


const Item = ({ info }) => {

    return (
        <Link to={`/detalle/${info.id}`} >
            <img src={info.img} width={100} height={100} />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;