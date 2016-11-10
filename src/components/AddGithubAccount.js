import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';


@observer
class AddGithubAccount extends React.Component {

  @observable githubUsername = '';

  onChange(event) {
    this.githubUsername = event.target.value;
  }

  addGithubAccount() {
    // Push github account
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Github username"
          value={this.githubUsername}
          onChange={this.onChange.bind(this)}
        />
        <button onClick={this.addGithubAccount.bind(this)}>Add</button>
      </div>
    )
  }
}

export default AddGithubAccount;