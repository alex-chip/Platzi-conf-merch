import React from 'react'
import Product from '../Product'

const Products = ({ products }) => (
  <section className="Products">
    <div className="Products-items">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </section>
)

export default Products
