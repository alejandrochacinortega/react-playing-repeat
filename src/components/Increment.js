import React from 'react';
import {observer} from 'mobx-react';
import CounterStore from '../stores/CounterStore';


@observer
class Increment extends React.Component {

  render() {
    console.log('buttons ', this.props.button.value);
    return (
      <button onClick={() => {{CounterStore.increment(parseInt(this.props.button.amount))}}}>+{this.props.button.amount}</button>
    )
  }
}

export default Increment;