import {Link} from "react-router-dom"

const Item =({entrada})=>{
    return(
        <div>
            <div className="entradas">
                <img src={entrada.img} width={100} height={100} />
                <Link to={`/item/${entrada.id}`} ><p className="entradas__nombres">{entrada.name}</p></Link>
            </div>
        </div>
    )
}

export default Item;