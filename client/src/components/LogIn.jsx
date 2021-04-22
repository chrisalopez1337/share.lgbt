import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {setOne} from 'local-js';

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
    @media (max-width: 625px) {
        width: 350px;
    }
    @media (max-width: 500px) {
        width: 290px;
    }
    @media (max-width: 420px) {
        width: 230px;
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

export default function LogIn({logIn, setPage}) {
	// Set up form data
	const [fields, setFields] = useState({username: '', password: ''});
	const {username, password} = fields;

	// Set up message data
	const [messages, setMessages] = useState({
		errorMessage: '',
		successMessage: ''
	});
	const {errorMessage, successMessage} = messages;

	// Handle message update
	function handleMessage(messageType, value) {
		setMessages({...messages, [messageType]: value});
	}

	// Handle input change
	function handleChange(e) {
		const {target} = e;
		const {name, value} = target;
		setFields({...fields, [name]: value});
	}

	// Submit handler form
	function handleSubmit(e) {
		e.preventDefault();
		// Send user data to the validation route.
		if (username === '' || password === '') {
			return handleMessage('errorMessage', 'Please fill out all forms.');
		}

		const userData = {username, password};
		axios
			.post('/api/users/validate', userData)
			.then(({data}) => {
				if (data.valid) {
					const key = 'current-user';
					setOne(key, data.data.username);
					logIn(data.data);
					setPage('home');
				} else {
					// User is either not found or invalid.
					handleMessage(
						'errorMessage',
						'Please double check your credentials.'
					);
				}
			})
			.catch((error) => console.log(error));
	}

	return (
		<Container onSubmit={handleSubmit}>
			<h1>Log In</h1>
			<Label htmlFor="username">Username/Email:</Label>
			<Input
				type="text"
				name="username"
				value={username}
				onChange={handleChange}
			/>

			<Label htmlFor="password">Password:</Label>
			<Input
				type="password"
				name="password"
				value={password}
				onChange={handleChange}
			/>

			<SubmitButton>Log In</SubmitButton>
			{errorMessage === '' ? null : <p>{errorMessage}</p>}
		</Container>
	);
}
