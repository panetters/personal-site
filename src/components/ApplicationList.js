import React, { Component } from 'react';

import Application from './Application';
import AppsList from '../data/appdata';

class ApplicationList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-header">
          Applications:
        </div>
        <div className="app-links">
          {AppsList.map(app =>
            <Application key={app.name} app={app.name} detail={app.detail} link={app.link}/>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ApplicationList;
