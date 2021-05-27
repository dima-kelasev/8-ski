import * as React from "react";
import '../style.css';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps';
import location from '../../../images/mapPoint .svg';
import mapStyle from "./makeStyle";

const Index = () => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 45.132128, lng: 42.006983}}
      defaultOptions={mapStyle}
      // defaultOptions={{styles: mapStyle}}
    >
      <Marker
        position={{lat: 45.132128, lng: 42.006983}}
        icon={{
          url: location,
          scaledSize: new window.google.maps.Size(35, 35),
        }}
      />
    </GoogleMap>
  );
}

const WraperMap =withScriptjs(withGoogleMap(Index))

export default function appMap() {
  return (
    <div className='wrapMap' >
      <WraperMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className='mobileMap'  style={{ height: `81vh`, marginTop: `36%`, }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
};