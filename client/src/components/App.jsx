import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {getOne, setOne, deleteOne} from 'local-js';
import Header from './Header.jsx';
import Converter from './Converter.jsx';
import TemporaryUrls from './TemporaryUrls.jsx';
// import ShareModal from './ShareModal.jsx';
import { useLocation } from 'react-router-dom';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';
import Dashboard from './Dashboard.jsx';

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

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    console.log(query.get('name'));

	function logIn(data) {
		setUserData(data);
		const key = 'current-user';
		setOne(key, data.username);
		setPage('dashboard');
	}

	function logOut() {
		setUserData(null);
		const key = 'current-user';
		deleteOne(key);
		setPage('home');
	}

	function getRecentUrls() {
		if (!userData) return;
		const lastFive = userData.links.slice(0, 5);
		const key = 'stored-urls';
		setOne(key, lastFive);
		setSavedLinks(lastFive);
	}

	useEffect(() => {
		const key = 'current-user';
		const data = getOne(key);
		if (data) {
			axios
				.get(`/api/users/get/${data}`)
				.then(({data}) => {
                            const { links } = data;
                            axios.post('/api/users/fetch/user-links', { linkIds: links })
                                .then(res => {
                                    const userLinks = res.data;
                                    const userData = {...data, ['links'] : userLinks };
							        setUserData(userData);
                                    setPage('dashboard');
                                })
                                .catch(console.log);
				})
				.catch(console.log);
		} else {
			setUserData(null);
		}
	}, []);

	useEffect(() => {
		getRecentUrls();
	}, [userData]);

	useEffect(() => {
		const key = 'stored-urls';
		const stored = getOne(key);
		if (stored) {
			setSavedLinks(stored);
		}
	}, []);

	function handleChange(e) {
		setRedirectLink(e.target.value);
	}

	function copyText(text) {
		navigator.clipboard.writeText(text);
	}

	function handleLocalStorage(short_link, redirect_link, clicks) {
		const key = 'stored-urls';
		const packet = {short_link, redirect_link, clicks};
		const stored = getOne(key);
		if (!stored) {
			const newArray = [packet];
			setSavedLinks(newArray);
			return setOne(key, newArray);
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
		axios
			.post('/api/links/create', {redirect_link})
			.then(({data}) => {
				const {short_link, redirect_link, clicks, _id} = data;
				// Have to make a dummy link for testing
				let hash = short_link.split('/');
				hash = hash[1];
				const testLink = `localhost:1337/${hash}`;
				handleLocalStorage(short_link, redirect_link, clicks);
				if (userData) {
					axios
						.post('/api/users/update/add-link', {linkId: _id, userData})
						.then(({data}) => {
                            const { links } = data;
                            axios.post('/api/users/fetch/user-links', { linkIds: links })
                                .then(res => {
                                    const userLinks = res.data;
                                    const userData = {...data, ['links'] : userLinks };
							        setUserData(userData);
							        setShortLink(testLink);
                                })
                                .catch(console.log);
						})
						.catch(console.log);
				} else {
					setShortLink(testLink);
				}
			})
			.catch(console.log);
	}

	const pageRender =
		page === 'home' ? (
			<>
				<Converter
					copyText={copyText}
					shortLink={shortLink}
					handleShortLink={handleChange}
					handleSubmit={handleSubmit}
					redirect_link={redirect_link}
				/>
				<TemporaryUrls
					savedLinks={savedLinks}
					copyText={copyText}
					userData={userData}
					setPage={setPage}
				/>
			</>
		) : page === 'signup' ? (
			<>
				<SignUp setPage={setPage} />
			</>
		) : page === 'login' ? (
			<>
				<LogIn setPage={setPage} logIn={logIn} />
			</>
		) : page === 'dashboard' ? (
			<>
				<Dashboard
					userData={userData}
					copyText={copyText}
					shortLink={shortLink}
					handleShortLink={handleChange}
					handleSubmit={handleSubmit}
					redirect_link={redirect_link}
				/>
			</>
		) : null;
	return (
		<Container>
			<Header setPage={setPage} userData={userData} logOut={logOut} />
			{pageRender}
		</Container>
	);
}
