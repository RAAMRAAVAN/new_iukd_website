import React from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps-api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDtZ5Gkx-kSjku67Bh1iC57buO8_fsg100">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, markers, etc. can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
