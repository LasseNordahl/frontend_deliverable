import React, { Component } from 'react';
import './../App';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class FeedbackForm extends Component {
  render() {
    return (
      <div className="feedbackForm">
        <h2 className="formTitle">Feedback</h2>
        <Form className="formInput">
					<Form.Group controlId="formFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control 
								required
								type="text" 
								placeholder="Peter" 
						/>
					</Form.Group>
					<Form.Group controlId="formLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control 
								required
								type="text" 
								placeholder="Anteater" 
						/>
					</Form.Group>
					<Form.Group controlId="formEmail">
						<Form.Label>Email</Form.Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
									required
									type="Email" 
									placeholder="PeterAnteater@uci.edu" 
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group controlId="formEmail">
						<Form.Label>Message</Form.Label>
						<Form.Control 
							as="textarea" 
							rows="3" 
							placeholder="More two dollar boba!"
						/>
					</Form.Group>
        </Form>
				<div className="formSubmitWrapper centerFlex">
					<Button className="submitButton" variant="primary" size="lg" block>
						Submit
					</Button>
				</div>
      </div>
    );
  }
}

export default FeedbackForm;
