import {observable, action} from 'mobx';
import GithubModel from '../models/githubModel';


var PROFILES = [
  {
    login: "omar",
    name: "Omar Khudeira",
    avatar_url: "https://avatars.githubusercontent.com/u/196368?v=3"
  },
  {
    login: "omar",
    name: "Omar Khudeira",
    avatar_url: "https://avatars.githubusercontent.com/u/196368?v=3"
  },
  {
    login: "omar",
    name: "Omar Khudeira",
    avatar_url: "https://avatars.githubusercontent.com/u/196368?v=3"
  }
];

class GithubStore {
  @observable profiles = [];

  constructor() {
    PROFILES.map((profile => this.profiles.push(new GithubModel(profile))))
  }

  @action
  addAccount(name) {
    console.log('name ', name);
    // profiles.push(new GithubModel(n))
  }

}

const githubStore = new GithubStore();

export default githubStore;