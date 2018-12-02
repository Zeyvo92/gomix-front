import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Row, Container } from 'reactstrap';

import './messageTemplate.css';

class MessageTemplate extends React.Component {
  static propTypes = {
    msgInfo: PropTypes.shape({
      _id: String,
      text: String,
      date: Date,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    console.log('bonjour');
  }

  render() {
    const { msgInfo } = this.props;
    return (
      <Container className="message-row">
        <Row>
          <Badge color="info" pill>
            {msgInfo.text}
          </Badge>
        </Row>
        <Row className="email-user">
          <p>{msgInfo.email}</p>
        </Row>
      </Container>
    );
  }
}

export default MessageTemplate;
