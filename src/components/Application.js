import React, { Component } from 'react';

class Application extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-individual">
        <a href="/handycap">{props.name}</a>
      </div>
    );
  }
}

export default Application;
