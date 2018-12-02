import { observable, decorate } from 'mobx';

export class MessageStore {
  messages = [];

  addMessage(message) {
    this.messages.push(message);
  }
}

decorate(MessageStore, {
  messages: observable,
});

const messageStore = new MessageStore();

export default messageStore;
