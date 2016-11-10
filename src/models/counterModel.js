import {action, computer, observable} from 'mobx';

class CounterModel {
  @observable amount;

  constructor(amount) {
    this.amount = amount
  }
}

export default CounterModel
