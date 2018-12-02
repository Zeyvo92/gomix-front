import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';
import { observer, inject } from 'mobx-react';

import './login.css';

class Login extends React.Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { history } = this.props;
    const { email, password } = this.state;
    fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => {
        if (response.status === 200) history.push('/');
        return response.json();
      })
      .then(data => {
        sessionStorage.setItem('userId', data.id);
      });
    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <Form>
          <Container>
            <Row className="vertical-center">
              <Col sm={{ size: 4, order: 2, offset: 2 }}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    value={email}
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
                    value={password}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 8, order: 2, offset: 2 }}>
                <Button
                  size="lg"
                  color="info"
                  block
                  onClick={this.handleSubmit}
                >
                  Sign in
                </Button>
              </Col>
            </Row>
            <Row>
              <Col
                sm={{ size: 8, order: 2, offset: 2 }}
                className="create-account"
              >
                <Button href="/signup" color="link">
                  Create an account.
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    );
  }
}

export default inject('userStore')(observer(Login));
