import React from 'react';
import Header from './Header';
import Result from './Result';
import AddButton from './AddButton';
import ButtonsList from './ButtonsList';


import {observer} from 'mobx-react';


@observer
class App extends React.Component {

  render() {
    return (
      <div>
        <Header title="Count"/>
        <Result />
        <AddButton/>
        <ButtonsList/>
        <hr/>
      </div>
    )
  }
}

export default App;