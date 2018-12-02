import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Button, Jumbotron, Form, FormGroup, Input } from 'reactstrap';
import socketIoClient from 'socket.io-client';

import * as topicst from '../../../stores/topicStore';
import './tchat.css';

class Tchat extends React.Component {
  static propTypes = {
    topicStore: PropTypes.instanceOf(topicst).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);

    this.socket = socketIoClient('http://localhost:8000');
  }

  componentDidMount() {
    const { topicStore } = this.props;
    this.socket.emit('joinTopic', { topicId: topicStore.currentTopic._id });
    this.socket.on('messageHistory', data => {
      console.log(data);
    });
    this.socket.on('newMessage', data => {
      console.log(data);
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSend = event => {
    const { topicStore } = this.props;
    const { message } = this.state;
    this.socket.emit('message', {
      userId: '5c032cb64c9a0b1656cfe128',
      topicId: topicStore.currentTopic._id,
      msg: message,
    });
    this.setState({ message: '' });
    event.preventDefault();
  };

  render() {
    const { message } = this.state;
    return (
      <Jumbotron className="topic-response">
        <div className="message-screen" />
        <Form>
          <FormGroup>
            <Input
              type="textarea"
              name="message"
              id="message"
              value={message}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button onClick={this.handleSend}>Send</Button>
        </Form>
      </Jumbotron>
    );
  }
}

export default inject('topicStore')(observer(Tchat));
