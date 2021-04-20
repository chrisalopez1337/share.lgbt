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

`;

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
			<h4>Link: {short_link}</h4>
			<h4>Redirects To: {formattedRedirect}</h4>
			<h4>Clicks: {clicks}</h4>
		</Container>
	);
}
