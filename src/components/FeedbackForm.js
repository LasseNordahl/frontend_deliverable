import React, { Component } from 'react';
import axios from 'axios';
import './../App';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// Constants declared for component
const FEEDBACK_URL = 'https://tranquil-lowlands-24043.herokuapp.com/feedback';
const messageLimit = 500

class FeedbackForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			messageLength: 0
		}

		// Bind functions
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.postFeedback = this.postFeedback.bind(this);
	}
	
	// handleMessageChange
	// Takes an event and updates the messageLength attribute of state with the new length
	handleMessageChange(e) {
		this.setState({
			messageLength: e.target.value.length
		});
	}

	// submitForm
	// Gathers form data and passes a grouped data object to the postFeedback function
	submitForm(e) {
		e.preventDefault();

		// Bind values of the form to a formData object for posting data
		let formData = {
			first: e.target.elements.first.value,
			last: e.target.elements.last.value,
			email: e.target.elements.email.value,
			message: e.target.elements.message.value
		};

		this.postFeedback(formData);
	}

	// postFeedback
	// Uses feedback URL with the forms data and logs the response
	postFeedback(formData) {
		axios.post(FEEDBACK_URL, formData)
		.then(function(response) {
			// Post succeeded
			console.log(response);
		})
		.catch(function(error) {
			// Post errored out
			console.log(error);
		})
	}

  render() {
    return (
      <div className="feedbackForm">
        <h2 className="formTitle">Feedback</h2>
        <Form className="formInput" onSubmit={this.submitForm}>
					<Form.Group>
						<Form.Label>First Name</Form.Label>
						<Form.Control 
								required
								name='first'
								type="text"
								placeholder="Peter" 
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name</Form.Label>
						<Form.Control 
								required
								name='last'
								type="text"
								placeholder="Anteater" 
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
									required
									name='email'
									type="email"
									placeholder="peter.anteater@uci.edu" 
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group>
						<Form.Label>Message</Form.Label>
						<Form.Control 
							required
							name='message'
							type="text"
							as="textarea" 
							rows="3" 
							maxLength={messageLimit}
							onChange={this.handleMessageChange}
							placeholder="The boba cost more than 2 dollars :("
						/>
						<p className="maxLengthCaption">
							{this.state.messageLength} / {messageLimit}
						</p>
					</Form.Group>
					<Button 
						className="submitButton" 
						variant="primary" 
						size="lg" 
						block
						type="submit"
					>
						Submit
					</Button>
        </Form>
      </div>
    );
  }
}

export default FeedbackForm;
