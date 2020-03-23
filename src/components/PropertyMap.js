import React from 'react'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div className="property-marker">
    {text}
  </div>
);

export default function PropertyMap(props) {

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: '' }}
      defaultCenter={props.center}
      defaultZoom={props.zoom}>
      <Marker
        lat={44.9778}
        lng={-93.2650}
        text="Location"
      />
    </GoogleMapReact>
  )
}

PropertyMap.defaultProps = {
  center: { lat: 44.9778, lng: -93.2650 },
  zoom: 11
};