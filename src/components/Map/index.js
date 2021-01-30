import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'

const Map = () => {
  const mapStyle = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718796
  }

  return (
    <LoadScript googleMapsApiKey={`${process.env.API_KEY_GOOGLE_MAP}`}>
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={9}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map