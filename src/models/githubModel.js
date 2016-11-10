import {observable} from 'mobx';


class GithubModel {
  @observable name;
  @observable avatar_url;
  @observable login;

  constructor (profile) {
    this.avatar_url = profile.avatar_url;
    this.name       = profile.name;
    this.login = profile.login;
  }
}

export default GithubModel;