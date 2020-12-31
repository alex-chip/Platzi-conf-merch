import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Product from '../Product'

// implementamos el contexto
// no requerimos llamar las props como parametro y en vez de eso lo traemos del contexto
const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <section className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  )
}

export default Products
