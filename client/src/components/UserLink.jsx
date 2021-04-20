import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    min-width: 500px;
    max-width: 500px;
    margin: 15px 0px 15px 0px;
    transition-duration: 0.2s;
    &:hover {
        box-shadow: 0px 0px 15px 0px #7830f2;
    }
    border: 2px solid #7830f2;
    border-radius: 7px;
    padding: 10px;
`;

const Link = styled.span`
	padding: 7px 10px 7px 10px;
	background-color: #e1dee3;
	color: #af36f5;
	font-size: 20px;
	font-weight: 400;
	border-radius: 7px;
`;

const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    flex-direction: row;
`;

const Button = styled.button`
    margin: 0px 5px 0px 5px;
	padding: 7px;
	background-color: ${(props) => (props.close ? '#f53d7d' : '#af36f5')};
	border: transparent;
	color: whitesmoke;
	font-family: inherit;
	font-size: 20px;
	cursor: pointer;
	border-radius: 7px;
	transition-duration: 0.2s;
	font-weight: bold;
	&:hover {
		color: ${(props) => (props.close ? '#f53d7d' : '#af36f5')};
		box-shadow: 0px 0px 15px 0px
			${(props) => (props.close ? '#f53d7d' : '#af36f5')};
		background-color: whitesmoke;
	}
`;

const Item = styled.h3``;

export default function UserLink({data}) {
	const {redirect_link, short_link, clicks} = data;
    const [formattedRedirect, setRedirect] = useState(redirect_link);
    function formatRedirect(str) {
        let x = str
            .split('://')
            .slice(1, str.length-1)
            .join()
            .slice(0, 30);
        if (x.length > 25) {
            x += '...'
        }
        setRedirect(x);
    }
    useEffect(() => {
        formatRedirect(redirect_link);
    }, [redirect_link])
	return (
		<Container>
            <Item>Link: <Link>{short_link}</Link></Item>
			<Item>Redirects To: {formattedRedirect}</Item>
            <Item>Clicks: {clicks}</Item>
            <ButtonRow>
                <Button>Copy</Button>
                <Button>Share</Button>
                <Button>Analytics</Button>
            </ButtonRow>
		</Container>
	);
}
