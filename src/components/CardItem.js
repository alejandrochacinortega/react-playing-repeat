import React from 'react';
import {observer} from 'mobx-react';

@observer
class CardItem extends React.Component {
  render() {
    console.log('this.props. ', this.props.profile);
    return (
      <div>
        <p>Hey {this.props.profile.name}</p>
      </div>
    )
  }
}

export default CardItem;