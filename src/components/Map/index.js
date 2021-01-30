import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import React from 'react'
import config from '../../../config'

const Map = ({ data }) => {
  const mapStyle = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
  }

  return (
    <LoadScript googleMapsApiKey={config.apiKeyGoogle}>
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