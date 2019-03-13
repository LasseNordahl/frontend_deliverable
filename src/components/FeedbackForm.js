import React, { Component } from 'react';
import axios from 'axios';
import './../App';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const FEEDBACK_URL = 'https://tranquil-lowlands-24043.herokuapp.com/feedback';

class FeedbackForm extends Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.handleFormChange = this.handleFormChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.postFeedback = this.postFeedback.bind(this);
	}
	
	handleFormChange(e) {
		let formData = Object.assign({}, this.state.formData);
		formData[e.target.name] = e.target.value;
	
		this.setState({
			formData: formData
		});
	}

	submitForm(e) {
		e.preventDefault();

		let formData = {
			first: e.target.elements.first.value,
			last: e.target.elements.last.value,
			email: e.target.elements.email.value,
			message: e.target.elements.message.value
		};

		this.postFeedback(formData);
	}

	postFeedback(formData) {
		let self = this

		axios.post(FEEDBACK_URL, formData)
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
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
								// required
								name='first'
								type="text"
								placeholder="Peter" 
								defaultValue="Peter"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Last Name</Form.Label>
						<Form.Control 
								required
								name='last'
								type="text"
								placeholder="Anteater" 
								defaultValue="Anteater"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<InputGroup>
							<InputGroup.Prepend>
								<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
							</InputGroup.Prepend>
							<Form.Control 
									// required
									name='email'
									type="email"
									placeholder="peteranteater@uci.edu" 
									defaultValue="pa@uci.edu"
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group>
						<Form.Label>Message</Form.Label>
						<Form.Control 
							// required
							name='message'
							type="text"
							as="textarea" 
							rows="3" 
							maxLength={500}
							placeholder="The boba cost more than 2 dollars :("
							defaultValue="2 dollar bober"
						/>
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
