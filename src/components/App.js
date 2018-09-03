import React, { Component } from 'react';
import '../styles/App.css';

import About from './About';
import ApplicationList from './ApplicationList';
import BottomBar from './BottomBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          My name is Michael Panetta,<br/>
          this is my website.
        </div>
        <About/>
        <ApplicationList/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
