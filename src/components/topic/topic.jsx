import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Container, Row, Jumbotron, Badge } from 'reactstrap';

import topicStore from '../../stores/topicStore';
import Tchat from './tchat/tchat';

import './topic.css';

class Topic extends React.Component {
  static propTypes = {
    store: PropTypes.instanceOf(topicStore).isRequired,
  };

  constructor(props) {
    super(props);
    console.log('bonjour');
  }

  render() {
    const { store } = this.props;
    return (
      <div className="topic">
        <Container>
          <Row>
            <Jumbotron className="topic-subject">
              <h1 className="display-3">{store.currentTopic.title}</h1>
              <p className="lead">{store.currentTopic.description}</p>
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
          <Row>
            <Tchat />
          </Row>
        </Container>
      </div>
    );
  }
}

export default observer(Topic);
