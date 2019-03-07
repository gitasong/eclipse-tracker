import React, { Component } from 'react';
import ReactMapboxGl, { Layer } from "react-mapbox-gl";

const Mapbox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  minZoom: 2,
  logoPosition: 'bottom-left'
});

class Map extends Component {
  render() {
    return(
      <Mapbox
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/satellite-streets-v10"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        center={[0, 23]}
        zoom={[1]}
      >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
          </Layer>
      </Mapbox>
    );
  }
}

export default Map;
