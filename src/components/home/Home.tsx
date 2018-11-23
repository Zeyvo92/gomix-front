import './Home.css';

import * as React from 'react';
import { CardColumns } from 'reactstrap';
import TopicCard from './TopicCard/TopicCard';

import { connect } from 'react-redux';
import { selectTopic } from '../../redux/actions/Topic';

interface Props {
  topic: any[];
  selectTopic: Function;
}

class Home extends React.Component<Props> {
  createTopicCards = () => {
    return this.props.topic.map(topic => (
      <TopicCard
        onMore={() => {
          this.props.selectTopic(topic.id);
          // @ts-ignore
          this.props.history.push('/topic');
        }}
      />
    ));
  };

  public render(): React.ReactNode {
    return (
      <div className="Home">
        <CardColumns className="dashboard">
          {this.createTopicCards()}
        </CardColumns>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  topic: state.topic.topics
});

const mapDispatchToProps = {
  selectTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
