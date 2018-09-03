import React, { Component } from 'react';

import data from '../data/data';

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-header">
          Skills:
        </div>
        {data.skills.map(area =>
          <div className="skill-area">
            {area.area}
            <div className="section-detail">{area.list}</div>
          </div>
          )}
      </React.Fragment>
    );
  }
}

export default Skills;
