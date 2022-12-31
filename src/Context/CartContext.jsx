import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

    export const CartProvider=({children}) =>{
        const [cart, setCart] = useState([]);

        console.log("carrito", cart)

        const addEntrada = (item,quantity) => {
            if (isInCart(item.id)){
                setCart(cart.map(entrada =>{
                    return entrada.id === item.id ? { ...entrada, quantity: entrada.quantity + quantity } : entrada
                }));
            }else{
                setCart([...cart, {...item,quantity}]);
            }
        }
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }
    const totalEntradas = () => cart.reduce((acumulador, entradaActual) => acumulador + entradaActual.quantity, 0);
    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(entrada => entrada.id === id) ?true : false;
    const removeEntrada = (id) => setCart(cart.filter(entrada => entrada.id !==id));
    
    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeEntrada,
            addEntrada,
            totalPrice,
            totalEntradas,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;