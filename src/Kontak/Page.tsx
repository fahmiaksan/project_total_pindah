import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
export default function KontakPage() {
  const containerStyle = {
    width: '400px',
    height: '400px',
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCN70pzn4Od5CnER5QYJ_VY6pXzM7re4EE",
  });
  const [map, setMap] = useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onMount = React.useCallback(function callback(map) {
    setMap(null);
  }, [])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onMount}
    >
      <>hello</>
    </GoogleMap>
  ) : (
    <></>
  )
};
