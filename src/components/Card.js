import React from 'react';
import GithubStore from '../stores/GithubStore';
import CardItem from './CardItem';

import {observer} from 'mobx-react';

@observer
class Card extends React.Component {
  render() {
    let profiles = GithubStore.profiles;
    return (
      <div>
        {profiles.map((profile, index) => <CardItem key={index} profile={profile}/>)}
      </div>
    )
  }
}

export default Card;