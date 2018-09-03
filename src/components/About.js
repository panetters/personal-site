import React, { Component } from 'react';

import data from '../data/data';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-header">
          About:
        </div>
        <div className="section-detail">
          {data.about}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
