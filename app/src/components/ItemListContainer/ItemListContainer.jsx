import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [isLoading,setIsLoading] = useState(true)    
    const { categoryId } = useParams();
    
    useEffect(() =>{
        setIsLoading(true);
        getProducts(categoryId).then(response =>{
            setItems(response)
            setIsLoading(false);
        })
    },[categoryId])
    return <ItemList items={items} isLoading={isLoading} category={categoryId} />
}

export default ItemListContainer;
