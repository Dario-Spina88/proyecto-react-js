import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "item")

    if (categoriaId) {
      const queryFilter = query(queryCollection, where("category", "==", categoriaId))
      getDocs(queryFilter).then(res => setData(res.docs.map(entrada => ({ id: entrada.id, ...entrada.data() }))))
    } else {
      getDocs(queryCollection).then(res => setData(res.docs.map(entrada => ({ id: entrada.id, ...entrada.data() }))))
    }
  }, [categoriaId])

  return (
    <div>
      <Title greeting={texto} />
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer;