import React, { Component } from 'react';

import Application from './Application';
import AppsList from '../data/appdata';

class ApplicationList extends Component {
  render() {
    return (
      <div className="app-links">
        {AppsList.map(app => {
          return <Application key={app.name} app={app.name} link={app.link}/>
        })}
      </div>
    );
  }
}

export default ApplicationList;
