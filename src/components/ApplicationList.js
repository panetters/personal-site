import React, { Component } from 'react';

import Application from './Application';

import AppsList from '../data/appdata';

class ApplicationList extends Component {
  render() {
    return (
      <div className="app-links">
        {AppsList.map(app => {
          return <Application appname={app.name}/>
        })}
      </div>
    );
  }
}

export default ApplicationList;
