import React from 'react';
import GithubStore from '../stores/GithubStore';
import CardItem from './CardItem';

import {observer} from 'mobx-react';

@observer
class Card extends React.Component {
  render() {
    let profiles = GithubStore.profiles;
    return (

      <table>
        <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Username</th>
        </tr>
        </thead>
        {profiles.map((profile, index) => <CardItem key={index} profile={profile}/>)}
      </table>
    )
  }
}

export default Card;