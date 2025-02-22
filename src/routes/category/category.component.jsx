import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)

    const [products,setProducts] = useState([]);

    useEffect(()=>{

        setProducts(categoriesMap[category])

    },[category,categoriesMap])

    return (
        <>
        
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
           
            {
         products &&   products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
        }
        </div>
        </>
     
    )

}

export default Category