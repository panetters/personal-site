import React, { Component } from 'react';

class BottomBar extends Component {
  render() {
    return (
      <div className="personal-links">
        <a href="https://www.linkedin.com/in/mpanetta/" target="_blank" rel="noopener noreferrer">
          <img src="linkedin.svg" alt="" className="personal-svg"/>
        </a>
        <a href="https://github.com/panetters" target="_blank" rel="noopener noreferrer">
          <img src="github.svg" alt="" className="personal-svg"/>
        </a>
      </div>
    );
  }
}

export default BottomBar;
