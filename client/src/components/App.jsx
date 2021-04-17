import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header.jsx';

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
        <>
            <Header />
            <h1>Get Link</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="redirect_link">Link to shorten</label>
                <input type="text" name="redirect_link" value={redirect_link} onChange={handleChange}/>
                <button type="submit">get short link</button>
            </form>
            {shortLink ? <h1>{shortLink}</h1> : null }
        </>
    );
};
