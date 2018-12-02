import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Container, Row, Jumbotron, Button, Badge } from 'reactstrap';

import './topic.css';

class Topic extends React.Component {
  static propTypes = {
    store: PropTypes.instanceOf(Topic).isRequired,
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
              <p className="lead">{store.currentTopic.desc}</p>
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
            <Jumbotron className="topic-response">
              <h1 className="display-3">Backend Developer</h1>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Row>
        </Container>
      </div>
    );
  }
}

export default observer(Topic);
