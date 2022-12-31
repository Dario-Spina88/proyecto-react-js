import Item from "../Item/Item";
import React from "react";

const ItemList = ({data = []}) =>{
    return(
        data.map(entrada => <Item key={entrada.id} info={entrada}/>)
    );
}

export default ItemList;