import {Entradas, categorias} from "../mock"
import Item from "../Item/Item"
import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const [item,setItem] = useState(Entradas)
  const {id}= useParams()

  const FilterCategory = new Promise((resolve,eject)=>{
    // setTimeout(()=>{
      const newEntradas = Entradas.filter((p)=> p.category == id)
      resolve(newEntradas)
    // },2000)
  })

useEffect(()=>{
  FilterCategory.then((response)=>{
    setItem(response)
  })
},[id])

return(
    <div className="itemlistcontainer__entrada">
      {
        item.map((entrada)=>{
          return <Item entrada={entrada} />
        })
      }
    </div>
  )
}

export default ItemListContainer;