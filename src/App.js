import React, { Component } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    }

    this.mapRef = React.createRef();
    this.containerRef = React.createRef();

    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  openSidebar() {
    this.setState({
      isSidebarOpen: true
    });
  }

  closeSidebar() {
    this.setState({
      isSidebarOpen: false
    });
  }

  render() {
    const mapRef = this.mapRef;
    const containerRef = this.containerRef;

    return (
      <div className="App">
        <Header
          openSidebar={this.openSidebar}
        />
        <Sidebar
          containerRef={this.containerRef}
          isSidebarOpen={this.state.isSidebarOpen}
          closeSidebar={this.closeSidebar}
        />
        <Map
          refs={{ mapRef, containerRef }}
        />
      </div>
    );
  }
}

export default App;
