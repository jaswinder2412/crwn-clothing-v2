import React from 'react'
import CategoryItem from '../category-items/category-item.component'
import './directory.style.scss'

function Directory({ categories }) {
  return (
    <div className="categories-container">
    {categories.map((categories) => (
    <CategoryItem key={categories.id} category={categories}/>
     ))}
  </div>
  )
}

export default Directory
