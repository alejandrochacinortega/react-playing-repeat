import React from 'react';
import Header from './Header';
import Increment from './Increment';
import Result from './Result';
import AddButton from './AddButton';
import CounterStore from '../stores/CounterStore';


import {observer} from 'mobx-react';


@observer
class App extends React.Component {

  render() {
    return (
      <div>
        <Header title="Count"/>
        <Result />
        <AddButton/>
        {CounterStore.buttons.map((button, index) => {
          return (
            <Increment key={index} button={button}/>
          )
        })
        }
        <hr/>
      </div>
    )
  }
}

export default App;