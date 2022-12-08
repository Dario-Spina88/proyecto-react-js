import {Entradas} from "../mock"
import "./ItemListContainer.css"

const ItemListContainer = () => {
return(
    <div className="itemlistcontainer__entrada">
      {
        Entradas.map((entrada=>{
          return(
            <div className="itemlistcontainer__producto">
              <img src={entrada.img} width={100} height={100} />
            </div>
          )
        }))
      }
    </div>
  )
}

export default ItemListContainer;