import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map></Map>
      </div>
    );
  }
}

export default App;
