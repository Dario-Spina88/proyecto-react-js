import {Link} from "react-router-dom";
const Entradas = ()=>{
    const entradas =[
        {
            id:"1",
            nombre: "Entradas Rock"
        },
        {
            id:"2",
            nombre: "Entradas Reggea"
        },
        {
            id:"3",
            nombre: "Entradas Electronica"
        },
        {
            id:"4",
            nombre: "Entradas Cumbia"
        }
    ]
    return(
        <div>
            
            {
                entradas.map((entrada)=>{
                    return 
                })
            }
        </div>
    )
}