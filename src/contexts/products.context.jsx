import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
    categoriesMap:{}
});  

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setcategoriesMap] = useState({})
    // useEffect(()=>{
        // This useEffect uses to upload the product in database
    //         addCollectionAndDocument('categories',SHOP_DATA) 
    // },[])
    useEffect(()=>{
        // This is how you can use async function in useEffect
        const getCategoriesMap = async () => {
                const categoryMap = await getCategoriesAndDocuments();
                setcategoriesMap(categoryMap)
        }
        getCategoriesMap();  
    },[])
    const value = {categoriesMap}
    return ( 
        <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>
    )
}