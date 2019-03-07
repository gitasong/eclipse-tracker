import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Header.css';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <span>
          <FontAwesomeIcon
            icon="bars"
            id="hamburger"
            onClick={this.props.openSidebar}
          />
        </span>
        <span className="title">
          E c l i p s e&nbsp;&nbsp;&nbsp;T r a c k e r
        </span>
        <span></span>
      </div>
    );
  }
}

export default Header;
