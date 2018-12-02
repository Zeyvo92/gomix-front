import React from 'react';
import PropTypes from 'prop-types';
import { CardColumns } from 'reactstrap';
import { observer } from 'mobx-react';

import TopicCards from './topicCard/topicCard';
import topicStore from '../../stores/topicStore';

import './home.css';

class Home extends React.Component {
  static propTypes = {
    store: PropTypes.instanceOf(Home).isRequired,
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
        <CardColumns className="dashboard">
          {this.createTopicCards()}
        </CardColumns>
      </div>
    );
  }
}

export default observer(Home);
