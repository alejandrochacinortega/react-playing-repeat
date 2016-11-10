import React from 'react';
import CounterStore from '../stores/CounterStore';

import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class AddButton extends React.Component {

  @observable amount = '';

  addButton() {
    CounterStore.addButton(parseInt(this.amount));
    this.amount = "";
  }

  onChange(event) {
    this.amount = event.target.value;
  }

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Add amount"
          value={this.amount}
          onChange={this.onChange.bind(this)}
        />
        <button onClick={this.addButton.bind(this)}>Add</button>
      </div>
    )
  }
}

export default AddButton;