import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.form`
	margin-top: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 2px solid #7830f2;
	padding: 20px 50px 40px 50px;
	border-radius: 7px;
	box-shadow: 0px 0px 15px 0px #7830f2;
	width: 600px;
    @media (max-width: 725px) {
        width: 425px;
    }
`;

const FormItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	text-align: left;
	width: 100%;
	flex-direction: column;
`;

const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
`;

const Input = styled.input`
	border: 1.5px solid #af36f5;
	border-radius: 4px;
	padding: 5px;
	background-color: transparent;
	width: 200px;
	font-family: inherit;
	font-size: 20px;
`;

const Label = styled.label`
	font-weight: bold;
	margin-top: 15px;
`;

const SubmitButton = styled.button`
	padding: 7px;
	background-color: #af36f5;
	border: transparent;
	color: whitesmoke;
	font-family: inherit;
	font-size: 20px;
	cursor: pointer;
	border-radius: 7px;
	margin: 10px 0px 5px 0px;
	transition-duration: 0.2s;
	font-weight: bold;
	&:hover {
		color: #af36f5;
		box-shadow: 0px 0px 15px 0px #af36f5;
		background-color: whitesmoke;
	}
`;

const Message = styled.div`
	max-width: 400px;
	margin-left: 15px;
`;
export default function SignUp({setPage}) {
	// Store form data;
	const [fields, setFields] = useState({
		username: '',
		password: '',
		verifyPassword: '',
		email: ''
	});
	const {username, password, verifyPassword, email} = fields;

	// Store user messaging
	const [messages, setMessages] = useState({
		submitMessage: '',
		usernameMessage: '',
		passwordMessage: '',
		verifyPasswordMessage: '',
		emailMessage: ''
	});
	const {
		usernameMessage,
		passwordMessage,
		verifyPasswordMessage,
		emailMessage,
		submitMessage
	} = messages;

	// Update handlers
	function handleChange(e) {
		const {target} = e;
		const {value, name} = target;
		setFields({...fields, [name]: value});
	}

	function handleMessage(name, value) {
		setMessages({...messages, [name]: value});
	}

	// Form validation for username: 4-10 Chars no special.
	useEffect(() => {
		if (username === '') {
			handleMessage('usernameMessage', '');
		} else {
			const regex = new RegExp('^[a-zA-Z0-9]{4,10}$');
			if (regex.test(username)) {
				// Make sure username doesnt already exist.
				axios
					.get(`/api/users/get/${username}`)
					.then(({data}) => {
						if (!data.username) {
							// Username is available.
							handleMessage('usernameMessage', '');
						} else {
							// Username is taken;
							const message = 'Username is already taken';
							handleMessage('usernameMessage', message);
						}
					})
					.catch((error) => console.error(error));
			} else {
				const message =
					'Username must be 4-10 characters, and contain no special characters.';
				handleMessage('usernameMessage', message);
			}
		}
	}, [username]);

	// Form validation for password
	useEffect(() => {
		if (password === '') {
			handleMessage('passwordMessage', '');
		} else {
			const regex = new RegExp(
				'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
			);
			if (regex.test(password)) {
				handleMessage('passwordMessage', '');
			} else {
				handleMessage(
					'passwordMessage',
					'Password must be eight or more characters, contain atleast one uppercase, one symbol, and one lowercase.'
				);
			}
		}
	}, [password]);

	// Form validation for password verification
	useEffect(() => {
		if (verifyPassword === '' && password === '') {
			handleMessage('verifyPasswordMessage', '');
		} else if (verifyPassword === password) {
			handleMessage('verifyPasswordMessage', '');
		} else {
			handleMessage('verifyPasswordMessage', 'Passwords must match');
		}
	}, [verifyPassword]);

	// Form validation for email
	useEffect(() => {
		if (email === '') {
			handleMessage('emailMessage', '');
		} else {
			const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
			if (regex.test(email.toLowerCase())) {
				// First make sure the email hasnt already been registered.
				axios
					.get(`/api/users/get/${email}`)
					.then(({data}) => {
						if (!data.email) {
							// This means the email hasnt been taken.
							handleMessage('emailMessage', '');
						} else {
							// The email is already registered.
							const message = 'This email is already registered';
							handleMessage('emailMessage', message);
						}
					})
					.catch((error) => console.error(error));
			} else {
				handleMessage('emailMessage', 'Please enter a valid email.');
			}
		}
	}, [email]);

	// Submit handler
	function handleSubmit(e) {
		e.preventDefault();

		const valid = true;

		const requiredFields = [username, email, password, verifyPassword];
		const errorMessages = [
			usernameMessage,
			emailMessage,
			passwordMessage,
			verifyPasswordMessage
		];
		const fieldError = 'All fields must be filled out.';
		const formatError = 'Please make sure all fields are formatted correctly.';

		for (const [i, fieldItem] of requiredFields.entries()) {
			const formatItem = errorMessages[i];
			if (fieldItem === '') {
				return handleMessage('submitMessage', fieldError);
			}

			if (formatItem !== '') {
				return handleMessage('submitMessage', formatError);
			}
		}

		// Format the data to be POSTed.
		const userData = {username, email, password};
		// Create the user.
		axios
			.post('/api/users/create', userData)
			.then((res) => {
				const message = `Thanks for signing up ${username}! Please log in :)`;
				handleMessage('submitMessage', message);
				setPage('login');
			})
			.catch((error) => console.error(error));
	}

	return (
		<Container onSubmit={handleSubmit}>
			<h1>Sign Up</h1>
			<Label htmlFor="username">Username:</Label>
			<Input
				type="text"
				name="username"
				value={username}
				onChange={handleChange}
			/>

			{usernameMessage === '' ? null : (
				<Message>
					<p>{usernameMessage}</p>
				</Message>
			)}

			<Label htmlFor="email">Email:</Label>
			<Input type="email" name="email" value={email} onChange={handleChange} />

			{emailMessage === '' ? null : (
				<Message>
					<p>{emailMessage}</p>
				</Message>
			)}

			<Label htmlFor="password">Password:</Label>
			<Input
				type="password"
				name="password"
				value={password}
				onChange={handleChange}
			/>

			{passwordMessage === '' ? null : (
				<Message>
					<p>{passwordMessage}</p>
				</Message>
			)}

			<Label htmlFor="verifyPassword">Verify your password:</Label>
			<Input
				type="password"
				name="verifyPassword"
				value={verifyPassword}
				onChange={handleChange}
			/>

			{verifyPasswordMessage === '' ? null : (
				<Message>
					<p>{verifyPasswordMessage}</p>
				</Message>
			)}

			<SubmitButton type="submit">Sign Up</SubmitButton>

			{submitMessage === '' ? null : (
				<Message>
					<p>{submitMessage}</p>
				</Message>
			)}
		</Container>
	);
}
