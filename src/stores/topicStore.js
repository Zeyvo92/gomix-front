import { observable, decorate } from 'mobx';

class TopicStore {
  topics = [
    {
      desc: 'description1',
      subTitle: 'subTitle1',
      title: 'title1',
      id: 1,
    },
    {
      desc: 'description2',
      subTitle: 'subTitle2',
      title: 'title2',
      id: 2,
    },
    {
      desc: 'description3',
      subTitle: 'subTitle3',
      title: 'title3',
      id: 3,
    },
    {
      desc: 'description4',
      subTitle: 'subTitle4',
      title: 'title4',
      id: 4,
    },
    {
      desc: 'description5',
      subTitle: 'subTitle5',
      title: 'title5',
      id: 5,
    },
    {
      desc: 'description6',
      subTitle: 'subTitle6',
      title: 'title6',
      id: 6,
    },
    {
      desc: 'description7',
      subTitle: 'subTitle7',
      title: 'title7',
      id: 7,
    },
    {
      desc: 'description8',
      subTitle: 'subTitle8',
      title: 'title8',
      id: 8,
    },
  ];

  currentTopic = null;

  addTopic(topic) {
    this.topics.push(topic);
  }

  fetchTopic() {
    return this.topics;
  }

  selectTopic(id) {
    this.currentTopic = this.topics.find(topic => topic.id === id);
  }
}

decorate(TopicStore, {
  topics: observable,
  description: observable,
});

const topicStore = new TopicStore();

export default topicStore;