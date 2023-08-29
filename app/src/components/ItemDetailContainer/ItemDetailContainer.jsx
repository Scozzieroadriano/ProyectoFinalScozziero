import { getProduct } from "../../services";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {

    const [item,setItem] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const { id } = useParams(); 

    useEffect(() => {
        setIsLoading(true);
        getProduct(id).then((response) =>{
            setItem(response)
        }).catch(() => {
            setItem(null);
        }).finally(() => {
            setIsLoading(false);
        })
        
        
    },[id])
    return (
        <ItemDetail item={item} isLoading={isLoading}/>
    )
}

export default ItemDetailContainer;