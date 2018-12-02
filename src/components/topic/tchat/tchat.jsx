import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Button, Jumbotron, Form, FormGroup, Input } from 'reactstrap';
import socketIoClient from 'socket.io-client';

import { TopicStore } from '../../../stores/topicStore';
import { MessageStore } from '../../../stores/messageStore';

import MessageTemplate from './messageTemplate/messageTemplate';

import './tchat.css';

class Tchat extends React.Component {
  static propTypes = {
    topicStore: PropTypes.instanceOf(TopicStore).isRequired,
    messageStore: PropTypes.instanceOf(MessageStore).isRequired,
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
    const { topicStore } = this.props;
    const { message } = this.state;
    this.socket.emit('message', {
      userId: sessionStorage.getItem('userId'),
      topicId: topicStore.currentTopic._id,
      text: message,
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

export default inject('topicStore', 'messageStore')(observer(Tchat));
