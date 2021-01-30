import axios from 'axios'
import { useEffect, useState } from 'react'
import config from '../../config'

const useGoogleAddress = address => {
  const [map, setMap] = useState({})
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.apiKeyGoogle}`

  useEffect(async () => {
    const response = await axios(API)
    setMap(response.data.results[0].geometry.location)
  }, [])
  return map
}

export default useGoogleAddress