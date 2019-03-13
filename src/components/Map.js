import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { NavigationControl } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const navStyle = {
  position: 'absolute',
  bottom: 36,
  right: 0,
  padding: '10px'
};


class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 23,
        longitude: 0,
        zoom: 1.2
      }
    };

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.handleViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  render() {
    return (
      <ReactMapGL
        ref={this.mapRef}
        {...this.state.viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v10"
        onViewportChange={this.handleViewportChange}
      >
        />
        <div className="nav" style={navStyle}>
          <NavigationControl
            onViewportChange={this.handleViewportChange}
          />
        </div>
      </ReactMapGL>
    );
  }
}

export default Map;
