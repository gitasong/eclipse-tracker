import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Sidebar.css';

class Sidebar extends Component {
  render() {
    return(
      <div
        id="sidebar"
        className={this.props.isSidebarOpen ? "open" : null}
      >
        
          <FontAwesomeIcon
            icon="times"
            className="close"
            onClick={this.props.closeSidebar}
          />
        
      </div>
    );
  }
}

export default Sidebar;
