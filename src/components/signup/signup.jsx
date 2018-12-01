import React from 'react';
import { Button, Col, Container, FormGroup, Input, Row } from 'reactstrap';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    fetch('http://localhost:8000/user/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="login">
        <Container>
          <Row className="vertical-center">
            <Col sm={{ size: 4, order: 2, offset: 2 }}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={{ size: 4, order: 2, offset: 0 }}>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 8, order: 2, offset: 2 }}>
              <Button
                size="lg"
                color="danger"
                block
                onClick={this.handleSubmit}
              >
                Create account
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Signup;
