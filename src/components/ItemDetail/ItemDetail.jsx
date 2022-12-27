import { useContext } from "react"
import {CartContext} from "../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail =({entrada})=>{
    const {addCount} = useContext(CartContext)

    const handlerAddCount =(count)=>(
        addCount(count,entrada[0])
    )
    return(
        <div>
        <h1>Detalle de las Entradas {entrada[0].name}</h1>
        <img src={entrada[0].img} width={300} height={300}/>
        <ItemCount onChangeCount={(e)=>handlerAddCount(e)}/>
        </div>
    )
}

export default ItemDetail;