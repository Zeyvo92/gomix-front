import { observable, decorate } from 'mobx';

class UserStore {
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
