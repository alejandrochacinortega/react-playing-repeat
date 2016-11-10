/**
 * Created by omar on 10/11/16.
 */
import {action, computed, observable} from 'mobx';
import CounterModel from '../models/counterModel';


class CounterStore {
  @observable value = 0;

  @observable buttons = [];

  @action
  increment(amount) {
    this.value = this.value + amount
  }

  @action
  addButton(amount) {
    var button = new CounterModel(amount);
    console.log('store add button', JSON.stringify(button));
    this.buttons.push(button)
  }
}

const counterStore = new CounterStore();

export default counterStore;