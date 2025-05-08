import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: -6.21268613169918,
  lng: 106.8531486165939,
}

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBkJrsQ7DTHw0R0jlvOo5RZ53OlDVIJGrM',
  })

  return isLoaded && (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  )
}

export default React.memo(Map)