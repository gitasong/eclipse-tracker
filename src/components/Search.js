import React, { Component } from 'react';
import '../css/Sidebar.css';

class Search extends Component {
  render() {
    return(
      <div
        className={this.props.isSidebarOpen ? "open" : "closed"}
        ref={this.props.containerRef}
        id="geocoder-container"
      />
    );
  }
}

export default Search;
