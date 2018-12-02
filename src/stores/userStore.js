import { observable, decorate } from 'mobx';

export class UserStore {
  currentUser = null;

  setCurrentUser(user) {
    this.currentUser = user;
  }
}

decorate(UserStore, {
  currentUser: observable,
});

const userStore = new UserStore();

export default userStore;
