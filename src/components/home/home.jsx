import React from 'react';
import PropTypes from 'prop-types';
import { CardColumns, Button } from 'reactstrap';
import { observer } from 'mobx-react';

import TopicCards from './topicCard/topicCard';
import topicStore from '../../stores/topicStore';

import './home.css';

class Home extends React.Component {
  static propTypes = {
    store: PropTypes.instanceOf(topicStore).isRequired,
  };

  createTopicCards = () => {
    const { store } = this.props;
    const topics = store.fetchTopic();
    return topics.map(topic => (
      <TopicCards store={topicStore} topicInfo={topic} />
    ));
  };

  render() {
    return (
      <div className="home">
        <Button
          href="/createtopic"
          className="create-topic-button"
          color="info"
          block
        >
          Create a new Topic !
        </Button>
        <CardColumns className="dashboard">
          {this.createTopicCards()}
        </CardColumns>
      </div>
    );
  }
}

export default observer(Home);
