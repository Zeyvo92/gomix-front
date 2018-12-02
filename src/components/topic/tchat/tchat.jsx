import React from 'react';
import { Button, Jumbotron, Form, FormGroup, Input } from 'reactstrap';

import './tchat.css';

class Tchat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSend = event => {
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

export default Tchat;
