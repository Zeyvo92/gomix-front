import { observable, decorate } from 'mobx';

class TopicStore {
  topics = [];

  currentTopic = null;

  addTopic(topic) {
    this.topics.push(topic);
  }

  fetchTopic() {
    fetch('http://localhost:8000/topic', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.topics = data;
      });
  }

  selectTopic(id) {
    this.currentTopic = this.topics.find(topic => topic._id === id);
  }
}

decorate(TopicStore, {
  topics: observable,
  description: observable,
});

const topicStore = new TopicStore();

export default topicStore;
