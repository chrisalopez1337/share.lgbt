import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { getOne, setOne, deleteOne } from 'local-js';
import Header from './Header.jsx';
import Converter from './Converter.jsx';
import TemporaryUrls from './TemporaryUrls.jsx';
import ShareModal from './ShareModal.jsx';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';

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
    const [savedLinks, setSavedLinks] = useState([]);
    const [page, setPage] = useState('home'); 
    const [userData, setUserData] = useState(null);

    function logIn(data) {
        setUserData(data);
        const key = 'current-user';
        setOne(key, data.username);
        setPage('home');
    }

    function logOut() {
        setUserData(null);
        const key = 'current-user';
        deleteOne(key);
        setPage('home');
    }

    useEffect(() => {
        const key = 'current-user';
        const data = getOne(key);
        if (data) {
            axios.get(`/api/users/get/${data}`)
                .then(({ data }) => {
                    setUserData(data);
                })
                .catch(console.log);
        } else {
            setUserData(null);
        }
    }, []);

    useEffect(() => {
        const key = 'stored-urls';
        const stored = getOne(key);
        if (stored) { setSavedLinks(stored) }
    }, []);

    function handleChange(e) {
        setRedirectLink(e.target.value);
    }

    function copyText(text) {
        navigator.clipboard.writeText(text);
    }

    function handleLocalStorage(short_link, redirect_link, clicks) {
        const key = 'stored-urls';
        const packet = { short_link, redirect_link, clicks };
        let stored = getOne(key);
        if (!stored) {
            const newArr = [packet];
            setSavedLinks(newArr);
            return setOne(key, newArr);
        } 
        if (stored.length < 5) {
            stored.unshift(packet);
            setSavedLinks(stored);
            return setOne(key, stored);
        }
        stored.pop();
        stored.unshift(packet);
        setSavedLinks(stored);
        return setOne(key, stored);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/links/create', { redirect_link })
            .then(({ data }) => {
                const { short_link, redirect_link, clicks } = data;
                // have to make a dummy link for testing
                let hash = short_link.split('/');
                hash = hash[1];
                const testLink = `localhost:1337/${hash}`;
                handleLocalStorage(short_link, redirect_link, clicks);
                setShortLink(testLink);
            })
            .catch(console.log);
    }

    const pageRender = page === 'home'
        ? (
            <>
                <Converter copyText={copyText} shortLink={shortLink} handleShortLink={handleChange} handleSubmit={handleSubmit} redirect_link={redirect_link}/>
                <TemporaryUrls savedLinks={savedLinks} copyText={copyText} />
            </>
          )
        : page === 'signup'
        ? (
            <>
               <SignUp setPage={setPage} /> 
            </>
          )
        : page === 'login'
        ? (
            <>
                <LogIn setPage={setPage} logIn={logIn} />
            </>
          )
        : null;
    return (
        <Container>
            <Header setPage={setPage} userData={userData} logOut={logOut} />
            {pageRender}
        </Container>
    );
};
