import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search.js';
import '../css/Sidebar.css';
import Calendar from './Calendar';

class Sidebar extends Component {
  render() {
    return(
      <div
        id="sidebar"
        className={this.props.isSidebarOpen ? "open" : "closed"}
      >

         <div id="calendar">
          <strong>Track Eclipse By Date: </strong> <Calendar />
          </div>
          <Search
            id="search"
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
