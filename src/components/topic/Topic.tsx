import './Topic.css';

import * as React from 'react';
import { Container, Row, Jumbotron, Button, Badge } from 'reactstrap';
import { connect } from 'react-redux';

class Topic extends React.Component {
  public render() {
    console.log(this.props);
    return (
      <div className="topic">
        <Container>
          <Row>
            <Jumbotron>
              <h1 className="display-3">Backend Developer</h1>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
                This is a simple hero unit, a simple Jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p className="lead">
                <Badge color="info" pill>
                  Javascript
                </Badge>{' '}
                <Badge color="info" pill>
                  Node.js
                </Badge>
              </p>
            </Jumbotron>
          </Row>
          <Row>
            <Jumbotron>
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

const mapStateToProps = (state: any) => ({
  topic: state.topic.selectedTopic
});

export default connect(mapStateToProps)(Topic);
