import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TempUrlItem from './TempUrlItem.jsx';

const Container = styled.div`
	margin: 50px 0px 50px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: 2px solid #3ae7f0;
	padding: 20px 50px 40px 50px;
	border-radius: 7px;
	box-shadow: 0px 0px 20px 0px #3ae7f0;
	width: 600px;
`;

const Link = styled.p`
	font-size: 20px;
	font-weight: bold;
	text-decoration: underline;
	text-decoration-color: #7830f2;
	color: #7830f2;
	cursor: pointer;
	transition-duration: 0.2s;
	&:hover {
		color: #f53d7d;
		text-decoration-color: #f53d7d;
	}
`;

export default function TemporaryUrls({
	savedLinks,
	copyText,
	userData,
	setPage
}) {
	const linkRender = userData ? (
		<Link onClick={() => setPage('dashboard')}>See all your saved URL's</Link>
	) : (
		<Link onClick={() => setPage('signup')}>
			Create an account to store all url's and more!
		</Link>
	);
	return (
		<Container>
			<h1>Your Recent URL's</h1>
			{linkRender}
			{savedLinks.length === 0 ? <h3>No Recent URL's shortened</h3> : null}
			{savedLinks.map(({short_link, clicks, redirect_link}) => (
				<TempUrlItem
					copyText={copyText}
					short_link={short_link}
					clicks={clicks}
					redirect_link={redirect_link}
				/>
			))}
		</Container>
	);
}
