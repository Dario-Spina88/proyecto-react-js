import { useState } from "react";

const ItemCount =({onchangeCount})=>{
    const [value,setValue] = useState(0)

    const handlerAddCount = () =>{
        onchangeCount(value + 1)
        setValue(value + 1)
    }

    const handlerSubtractionCount = () =>{
        onchangeCount(value - 1)
        setValue(value - 1)
    }
    return(
        <div>
            <h4>Agregar Item</h4>
            <button onClick={()=>handlerSubtractionCount}>-</button>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={()=>handlerAddCount}>+</button>
        </div>
    )
}

export default ItemCount;