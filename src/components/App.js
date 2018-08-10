import React, { Component } from 'react';
import '../styles/App.css';

import Applications from './ApplicationList';
import BottomBar from './BottomBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          My name is Michael Panetta,<br/>
          Welcome to my site.
        </div>
        <Applications/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
