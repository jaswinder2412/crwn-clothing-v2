import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";
import './categories-preview.styles.scss'

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

    const { categoriesMap } = useContext(CategoriesContext)
    console.log('categoriesMap', categoriesMap)
  
    return (
        <div className="category-preview-container">

            { Object.keys(categoriesMap).map((title) => {
                 const products = categoriesMap[title];
                    return (
<CategoryPreview key={title} title={title} product={products}></CategoryPreview>
                       
 
                    )
                })

            }



        </div>
    )
}

export default CategoriesPreview;