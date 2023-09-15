import { doc, getDoc, collection , getDocs, getFirestore, query, where, QuerySnapshot} from "firebase/firestore";

//getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemDoc = doc(db, "items" , id);

        getDoc(itemDoc)
            .then((doc) =>{
                if (doc.exists()) {
                    resolve({ id: doc.id, ...doc.data() });
                } else {
                    resolve(null);
                }
            })
            .catch((error) => {
             reject(error); 
            });

    })
}
//getProducts
export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
     const db = getFirestore();

     const itemCollection = collection(db,"items");

     let q
     if (categoryId) {
        q = query(itemCollection, where("categoryId", "==", categoryId));
     } else{
        q = query(itemCollection);
     }

     getDocs(q)
        .then((querySnapshot)=>{
            const products = querySnapshot.docs.map((doc) =>{
                return {id: doc.id, ...doc.data() }
            });
            resolve(products);    
        })
        .catch((error) => {
            reject(error)
        })
    })
}