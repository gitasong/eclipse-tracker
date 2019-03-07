import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Sidebar.css';

class Sidebar extends Component {
  render() {
    return(
      <div
        id="sidebar"
      >
        
          <FontAwesomeIcon
            icon="times"
            className="close"
          />
        
      </div>
    );
  }
}

export default Sidebar;
