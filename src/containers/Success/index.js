import React, { useContext } from 'react'
import Map from '../../components/Map'
import AppContext from '../../context/AppContext'

const Success = () => {
  const {state: { buyer } } = useContext(AppContext)

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegará en 3 días a tu dirección:</span>
        <div className="Success-map">
          <Map />
        </div>
      </div>
    </div>
  )
}

export default Success
