import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header.jsx';
import Converter from './Converter.jsx';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export default function App() {
    const [shortLink, setShortLink] = useState(null);
    const [redirect_link, setRedirectLink] = useState('');
    function handleChange(e) {
        setRedirectLink(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/links/create', { redirect_link })
            .then(({ data }) => {
                const { short_link } = data;
                // have to make a dummy link for testing
                let hash = short_link.split('/');
                hash = hash[1];
                const testLink = `localhost:1337/${hash}`;
                setShortLink(testLink);
            })
            .catch(console.log);
    }
    return (
        <Container>
            <Header />
            <Converter />
        </Container>
    );
};
