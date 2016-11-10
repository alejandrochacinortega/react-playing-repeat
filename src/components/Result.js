import React from 'react';
import CounterStore from '../stores/CounterStore';

import {observer} from 'mobx-react';

@observer
class Result extends React.Component {
  render() {
    return (
      <span>{CounterStore.value}</span>
    )
  }
}

export default Result;