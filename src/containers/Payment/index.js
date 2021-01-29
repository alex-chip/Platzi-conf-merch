import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button'
import { useHistory } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import handleSumTotal from '../../utils/sumTotal'

const Payment = () => {
  const { state: { cart, buyer }, addNewOrder } = useContext(AppContext)

  const history = useHistory()

  const paypalOptions = {
    clientId: process.env.APP_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = data => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del perdido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span className='icon-money'>{item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={err => console.error(`Start error: ${err}`)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>

  )
}

export default Payment
