import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import handleSumTotal from '../../utils/sumTotal'

const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext)
  // const { cart } = state

  const quantityCartProducts = useMemo(() => cart.length
    // return cartLength
  , [cart])

  const handleRemove = (product, index) => () => {
    removeFromCart(product, index)
  }

  return (
    <section className="Checkout">
      <div className="Checkout-content">
        {quantityCartProducts > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item, index) => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span className='icon-money'>
                {item.price}
              </span>
            </div>
            <button type="button" onClick={handleRemove(item, index)}>
              <i className='icon-trash fas fa-trash-alt' />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3 className='icon-money'>{`Precio Total: ${handleSumTotal(cart)}`}</h3>
          <Link to='/checkout/information'>
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Checkout
