import React, { Component } from 'react';
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

    this.openSidebar = this.openSidebar.bind(this);
  }

  openSidebar() {
    this.setState({
      isSidebarOpen: true
    });
  }
  render() {
    return (
      <div className="App">
        <Header
          openSidebar={this.openSidebar}
        />
        <Sidebar
        />
        <Map></Map>
      </div>
    );
  }
}

export default App;
