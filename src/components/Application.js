import React, { Component } from 'react';

class Application extends Component {
  constructor(props) {
    super(props);

    this.openLink = this.openLink.bind(this);
  }

  openLink() {
    window.open(this.props.link, "_blank")
  }

  render() {
    return (
      <div className="app-box" onClick={this.openLink}>
        <div className="app-name">
          {this.props.app}
        </div>
      </div>
    );
  }
}

export default Application;
