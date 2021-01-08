import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext)
  // const { cart } = state

  const quantityCartProducts = useMemo(() => cart.length
    // return cartLength
  , [cart])

  const handleRemove = (product, index) => () => {
    removeFromCart(product, index)
  }

  const handleSumTotal = useMemo(() =>
    cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    // const sum = cart.reduce(reducer, 0)
    // return sum
  , [cart])

  return (
    <section className="Checkout">
      <div className="Checkout-content">
        {quantityCartProducts > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item, index) => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type="button" onClick={handleRemove(item, index)}>
              <i className='fas fa-trash-alt' />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal}`}</h3>
          <Link to='/checkout/information'>
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Checkout
