import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ShareModal from './ShareModal.jsx';

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
        width: 450px;
    }
`;

const Title = styled.h1`
	font-size: 2.75em;
	padding: 0;
	margin: 25px 0px 0px 0px;
`;

const Input = styled.input`
	background-color: transparent;
	border: 3px solid #f53d7d;
	border-radius: 10px;
	padding: 5px;
	font-family: inherit;
	font-weight: 400;
	font-size: 17px;
	width: 400px;
	margin-bottom: 20px;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
`;

const SubmitButton = styled.button`
	border: 2px solid #f53d7d;
	background-color: #f53d7d;
	padding: 5px;
	font-family: inherit;
	font-size: 17px;
	font-weight: bold;
	border-radius: 7px;
	color: whitesmoke;
	margin-left: 5px;
	cursor: pointer;
	transition-duration: 0.2s;
	margin-bottom: 20px;
	&:hover {
		background-color: #7830f2;
		box-shadow: 0px 0px 15px 0px #7830f2;
	}
`;

const Link = styled.h2`
	padding: 7px 10px 7px 10px;
	background-color: #e1dee3;
	color: #af36f5;
	font-size: 20px;
	font-weight: 400;
	border-radius: 7px;
`;

const Info = styled.p`
	font-size: 16px;
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

const CopyButton = styled.button`
	padding: 7px;
	background-color: ${(props) => (props.close ? '#f53d7d' : '#af36f5')};
	border: transparent;
	color: whitesmoke;
	font-family: inherit;
	font-size: 20px;
	cursor: pointer;
	border-radius: 7px;
	margin-left: 10px;
	transition-duration: 0.2s;
	font-weight: bold;
	&:hover {
		color: ${(props) => (props.close ? '#f53d7d' : '#af36f5')};
		box-shadow: 0px 0px 15px 0px
			${(props) => (props.close ? '#f53d7d' : '#af36f5')};
		background-color: whitesmoke;
	}
`;

export default function Converter({
	shortLink,
	handleShortLink,
	handleSubmit,
	redirect_link,
	copyText,
    setPage
}) {
	const [shareRender, setShareRender] = useState(false);
	return (
		<Container onSubmit={handleSubmit}>
			<Title>Shorten URL</Title>
            <Info onClick={() => setPage('mission')}>
				50% of all revenue is donated to LGBTQ+ foundations. Learn more...
			</Info>
			<Row>
				<Input
					type="text"
					name="redirect_url"
					value={redirect_link}
					onChange={handleShortLink}
				/>
				<SubmitButton>Shorten</SubmitButton>
			</Row>

			{shortLink?.length > 0 ? (
				<Row>
					<Link>{shortLink}</Link>
					<CopyButton
						onClick={(e) => {
							e.preventDefault();
							copyText(shortLink);
						}}
					>
						Copy
					</CopyButton>
					{shareRender ? (
						<CopyButton
							close
							onClick={(e) => {
								e.preventDefault();
								setShareRender(false);
							}}
						>
							Close Share
						</CopyButton>
					) : (
						<CopyButton
							onClick={(e) => {
								e.preventDefault();
								setShareRender(true);
							}}
						>
							Share
						</CopyButton>
					)}
				</Row>
			) : null}
			{shareRender ? (
				<ShareModal url={shortLink} display={shareRender} />
			) : null}
		</Container>
	);
}
