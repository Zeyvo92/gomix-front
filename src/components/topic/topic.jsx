import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Container, Row, Jumbotron, Badge } from 'reactstrap';

import { TopicStore } from '../../stores/topicStore';
import Tchat from './tchat/tchat';

import './topic.css';

class Topic extends React.Component {
  static propTypes = {
    topicStore: PropTypes.instanceOf(TopicStore).isRequired,
  };

  constructor(props) {
    super(props);
    console.log('');
  }

  render() {
    const { topicStore } = this.props;

    let tchat;
    if (sessionStorage.getItem('userId') != null) {
      tchat = <Tchat />;
    }

    return (
      <div className="topic">
        <Container>
          <Row>
            <Jumbotron className="topic-subject">
              <h1 className="display-3">{topicStore.currentTopic.title}</h1>
              <p className="lead">{topicStore.currentTopic.description}</p>
              <hr className="my-2" />
              <p className="lead">
                <Badge color="info" pill>
                  Javascript
                </Badge>
                <Badge color="info" pill>
                  Node.js
                </Badge>
              </p>
            </Jumbotron>
          </Row>
          <Row>{tchat}</Row>
        </Container>
      </div>
    );
  }
}

export default inject('topicStore')(observer(Topic));
