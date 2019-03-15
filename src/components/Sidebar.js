import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search.js';
import '../css/Sidebar.css';

class Sidebar extends Component {
  render() {
    return(
      <div
        id="sidebar"
        className={this.props.isSidebarOpen ? "open" : null}
      >
          <Search
            containerRef={this.props.containerRef}
            isSidebarOpen={this.props.isSidebarOpen}
          />
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
