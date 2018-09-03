import React, { Component } from 'react';

import Application from './Application';
import data from '../data/data';

class ApplicationList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-header">
          Applications:
        </div>
        <div className="app-links">
          {data.apps.map(app =>
            <Application key={app.name} app={app.name} detail={app.detail} link={app.link}/>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ApplicationList;
