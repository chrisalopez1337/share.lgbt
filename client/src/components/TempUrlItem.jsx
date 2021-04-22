import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ShareModal from './ShareModal.jsx';

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
	border: 3px solid #f53d7d;
	border-radius: 7px;
	min-width: 600px;
    max-width: 600px;
	margin: 10px 10px 10px 10px;
	padding: 0px 10px 0px 10px;
	transition-duration: 0.2s;
	&:hover {
		box-shadow: 0px 0px 10px 0px #7830f2;
		border: 3px solid #7830f2;
	}
    @media (max-width: 720px) {
        min-width: 350px;
        max-width: 350px;
        flex-direction: column;
    }
    @media (max-width: 500px) {
        min-width: 300px;
        max-width: 300px;
    }
    @media (max-width: 420px) {
        min-width: 250px;
        max-width: 250px;
    }
`;

const Column = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	margin: 0px 10px 0px 10px;
    @media (max-width: 720px) {
        justify-content: center;
        align-items: center;
    }
`;

const RedirectWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	margin: 0px 10px 0px 10px;
	min-width: 300px;
	max-width: 300px;
    @media (max-width: 720px) {
        justify-content: center;
        align-items: center;
    }
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
    @media (max-width: 720px) {
        flex-direction: row;
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
	margin: 5px 5px 5px 5px;
	transition-duration: 0.2s;
	font-weight: bold;
	&:hover {
		color: ${(props) => (props.close ? '#f53d7d' : '#af36f5')};
		box-shadow: 0px 0px 15px 0px
			${(props) => (props.close ? '#f53d7d' : '#af36f5')};
		background-color: whitesmoke;
	}
    @media(max-width: 720px) {
        margin: 5px 5px 10px 5px;
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

const Header = styled.p`
	font-weight: bold;
	text-decoration: underline;
`;

const RedirectLink = styled.h3`
	color: #3b3b3b;
`;

export default function TemporaryUrlItem({
	short_link,
	redirect_link,
	clicks,
	copyText
}) {
	const [shareRender, setShareRender] = useState(false);
	return (
		<>
			<Row>
				<Column>
					<Header>Short Url:</Header>
					<Link>{short_link}</Link>
				</Column>

				<RedirectWrapper>
					<Header>Links To:</Header>
					<RedirectLink>{redirect_link}</RedirectLink>
				</RedirectWrapper>

				<ButtonWrapper>
					<CopyButton onClick={() => copyText(short_link)}>Copy</CopyButton>
					{shareRender ? (
						<CopyButton close onClick={() => setShareRender(false)}>
							Close
						</CopyButton>
					) : (
						<CopyButton onClick={() => setShareRender(true)}>Share</CopyButton>
					)}
				</ButtonWrapper>
			</Row>
			{shareRender ? (
				<ShareModal url={short_link} display={shareRender} />
			) : null}
		</>
	);
}
