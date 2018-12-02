import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  Button,
  Container,
  Row,
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import './createTopic.css';

class CreateTopic extends React.Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreate = event => {
    const { history } = this.props;
    const { title, description } = this.state;
    fetch('http://localhost:8000/topic/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
      .then(response => {
        if (response.status === 201) history.push('/');
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
    event.preventDefault();
  };

  render() {
    const { title, description } = this.state;
    return (
      <div className="createTopic">
        <Container>
          <Row>
            <Jumbotron className="topic-create-panel">
              <Form>
                <FormGroup>
                  <Label for="title-input">Topic title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title-input"
                    placeholder="Enter a title for your topic"
                    value={title}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description-input">Topic Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description-input"
                    placeholder="Enter a Description for your topic"
                    value={description}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button color="info" onClick={this.handleCreate}>
                  Create
                </Button>
              </Form>
            </Jumbotron>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreateTopic;
