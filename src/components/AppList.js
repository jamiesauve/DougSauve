import React from 'react';

import AppEntry from './AppEntry';
/*eslint-disable*/
export default class ProjectList extends React.Component {

  render () {
    return (
      <div>
        <AppEntry
          title = "The Fishing Game"
          image = "/images/FishingGame.png"
          imageAlt = "A screenshot of Doug Sauve's Fishing Game."
          href = "/apps/FishingGame"
        />
        <AppEntry
          title = "The Fishing Game"
          image = "/images/FishingGame.png"
          imageAlt = "A screenshot of Doug Sauve's Fishing Game."
          href = "/apps/FishingGame"
        />
    </div>
    );
  }
}