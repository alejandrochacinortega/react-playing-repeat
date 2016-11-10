import React from 'react';
import CounterStore from '../stores/CounterStore';

import {observer} from 'mobx-react';

@observer
class Result extends React.Component {
  render() {
    return (
      <div>
        <span>{CounterStore.value}</span>
      </div>
    )
  }
}

export default Result;