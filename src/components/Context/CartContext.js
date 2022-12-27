import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext(null)

const initialState = {
    count: 0,
    entrada:{},
    listaEntrada:[]
}

export const CartContextProvider=({children}) =>{
    const [state,dispatch] = useReducer(CartReducer,initialState)

    function addCount(count,entrada){
        dispatch({
            type:"ADD_ITEMS",
            payload:{count,entrada}
        })
    }

    return(
        <CartContext.Provider
        value={{
            count:state.count,
            entrada:state.entrada,
            listaEntrada:state.listaEntrada,
            addCount,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}