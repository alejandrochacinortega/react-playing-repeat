import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import GithubStore from '../stores/GithubStore';

import Error from './Error.js';




@observer
class AddGithubAccount extends React.Component {

  @observable githubUsername = '';
  @observable profileNotFound = '';

  onChange(event) {
    this.githubUsername = event.target.value;
  }

  async addGithubAccount() {
    try {
      await GithubStore.addAccount(this.githubUsername);
      this.profileNotFound = "";
    }
    catch (error) {
      this.profileNotFound = "Profile not found";
    }

    this.githubUsername = "";

  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder={this.profileNotFound ? "Try again" : "Github username"}
          value={this.githubUsername}
          onChange={this.onChange.bind(this)}
        />
        <button onClick={this.addGithubAccount.bind(this)}>Add</button>
        <Error profileNotFound={this.profileNotFound}/>
      </div>
    )
  }
}

export default AddGithubAccount;