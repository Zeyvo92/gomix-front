import React from 'react';
import PropTypes from 'prop-types';
import { CardColumns, Button } from 'reactstrap';
import { observer, inject } from 'mobx-react';

import TopicCards from './topicCard/topicCard';
import * as topicst from '../../stores/topicStore';

import './home.css';

class Home extends React.Component {
  static propTypes = {
    topicStore: PropTypes.instanceOf(topicst).isRequired,
  };

  componentDidMount() {
    const { topicStore } = this.props;
    topicStore.fetchTopic();
  }

  createTopicCards = () => {
    const { topicStore } = this.props;
    return topicStore.topics.map(topic => <TopicCards topicInfo={topic} />);
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

export default inject('topicStore')(observer(Home));
