// import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {categorias,menus} from "./components/mock"


function App(){


return(
    <BrowserRouter className="App">
        <NavBar menus={menus} categorias={categorias} />
        <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:id" element={<ItemListContainer/>} />
        </Routes>
    </BrowserRouter>
    
)
}

export default App;



// function App() {
//     const [contador,setContador] = useState(0)

//     useEffect(()=>{
//         console.log("useEffect1")
//     },[])

//     useEffect(()=>{
//         console.log("onCLick",contador)
//     },[contador])


//     const setValorMas = () => {
//         setContador (contador + 1)
//     }

//     const setValorMenos = () => {
//         setContador (contador - 1)
//     }

    
//     return (
//     <div className="App">
//     <NavBar/>
//     <ItemListContainer name="Dario"/>
//     <h1>Venta de Entradas</h1>
//     <section>
        
//         <p>Cuantas entradas quieres {contador} </p>
//         <div>
//         <button onClick={()=> setValorMenos()}>-</button>
//         <button onClick={()=> setValorMas()}>+</button>
//         </div>

//         <button>Agregar al carrito</button>

//     </section>
//     <Footer/>
//     </div>

//     );
// }


// export default App;