import React from 'react';
import CounterStore from '../stores/CounterStore';
import Increment from './Increment';

import {observer} from 'mobx-react';

@observer
class ButtonsList extends React.Component {
  render() {
    return (
      <div>
        {CounterStore.buttons.map((button, index) => {
          return (
            <Increment key={index} button={button}/>
          )
        })
        }
      </div>
    )
  }
}

export default ButtonsList;