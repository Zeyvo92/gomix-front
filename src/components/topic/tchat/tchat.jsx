import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Button, Jumbotron, Form, FormGroup, Input } from 'reactstrap';
import socketIoClient from 'socket.io-client';

import * as topicst from '../../../stores/topicStore';
import * as messagest from '../../../stores/messageStore';
import * as userst from '../../../stores/userStore';

import MessageTemplate from './messageTemplate/messageTemplate';

import './tchat.css';

class Tchat extends React.Component {
  static propTypes = {
    topicStore: PropTypes.instanceOf(topicst).isRequired,
    messageStore: PropTypes.instanceOf(messagest).isRequired,
    userStore: PropTypes.instanceOf(userst).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);

    this.socket = socketIoClient('http://localhost:8000');
  }

  componentDidMount() {
    const { topicStore, messageStore } = this.props;
    this.socket.emit('joinTopic', { topicId: topicStore.currentTopic._id });
    this.socket.on('messageHistory', data => {
      data.map(msg => messageStore.addMessage(msg));
    });
    this.socket.on('newMessage', data => {
      messageStore.addMessage(data);
    });
  }

  componentWillUnmount() {
    const { topicStore } = this.props;
    this.socket.emit('leaveTopic', { topicId: topicStore.currentTopic._id });
  }

  createMessages = () => {
    const { messageStore } = this.props;
    return messageStore.messages.map(msg => <MessageTemplate msgInfo={msg} />);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSend = event => {
    const { topicStore, userStore } = this.props;
    const { message } = this.state;
    this.socket.emit('message', {
      userId: userStore.currentUser,
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
        <div className="message-screen">{this.createMessages()}</div>
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

export default inject('topicStore', 'messageStore', 'userStore')(
  observer(Tchat),
);
