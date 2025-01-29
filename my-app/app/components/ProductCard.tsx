import React from 'react'
import Add from './Add';
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <Add/> 
    </div>
  )
}

export default ProductCard
