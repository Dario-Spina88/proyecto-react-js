import { collection, getFirestore, addDoc } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartFinish from "../CartFinish/CartFinish";

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <div>
                <p>No hay entradas en el carrito</p>
                <Link to="/">Hacer compras</Link>
            </div>
        )
    }
    
    const order = {
        buyer:{
            name: "dario",
            email: "dario@gmail.com",
            phone: "31313131",
            address: "agagaaga"
        },
        items: cart.map(entrada => ({id:entrada.id, title: entrada.title, price: entrada.price, quantity: entrada.quantity})),
        total: totalPrice(),
    }

    const handleClick = ()=>{
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id})=>console.log(id))
    }

    return (
        <div>
            {
                cart.map(entrada => <CartFinish key={entrada.id} entrada={entrada} />)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <button onClick={handleClick}>Generar orden</button>
        </div>
    )
}

export default Cart;
