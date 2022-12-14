import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDoc, getFirestore, doc } from 'firebase/firestore';


export const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const{detalleId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "item",detalleId);
        getDoc(queryDoc).then(res=>setData({id: res.id,...res.data()}))
    },[detalleId])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;