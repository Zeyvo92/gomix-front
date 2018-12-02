import React from 'react';
import { Jumbotron, Form, FormGroup, Input } from 'reactstrap';

class Tchat extends React.Component {
  constructor(props) {
    super(props);
    console.log('bonjour');
  }

  render() {
    return (
      <Jumbotron className="topic-response">
        <div className="message-screen" />
        <Form>
          <FormGroup>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
      </Jumbotron>
    );
  }
}

export default Tchat;
