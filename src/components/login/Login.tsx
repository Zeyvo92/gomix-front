import "./Login.css";

import * as React from "react";
import { Button, Col, Container, FormGroup, Input, Row } from "reactstrap";

class Login extends React.Component {
	public render(): React.ReactNode {
		return (
			<div className="Login">
				<Container>
					<Row className="vertical-center">
						<Col sm={{ size: 4, order: 2, offset: 2 }}>
							<FormGroup>
								<Input
									type="email"
									name="email"
									id="exampleEmail"
									placeholder="Email"
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
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col sm={{ size: 8, order: 2, offset: 2 }}>
							<Button size="lg" block={true}>
								Sign in
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Login;
