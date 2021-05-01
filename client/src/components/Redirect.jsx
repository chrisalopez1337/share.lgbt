import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const HeaderWrapper = styled.div`
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

const AdWrapper = styled.div`
    margin-top: 50px;
    marin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #7830f2;
    padding: 20px 50px 40px 50px;
    border-radius: 7px;
    box-shadow: 0px 0px 15px 0px #7830f2;
    width: 600px;
    height: 600px;
    @media (max-width: 725px) {
        width: 450px;
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

const Title = styled.h2`
	background-image: linear-gradient(
		45deg,
		pink 16.666%,
		#f52c68 16.666%,
		#f5bf2c 33.333%,
		#ffee00 33.333%,
		#6fff5c 50%,
		#3ae7f0 50%,
		#7830f2 66.666%,
		#d230f2 66.666%,
		pink 83.333%,
		#f52c68 83.333%
	);
	background-size: 100%;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: rainbow-text-simple-animation-rev 1s ease forwards;
	@keyframes rainbow-text-simple-animation-rev {
		0% {
			background-size: 650%;
		}
		40% {
			background-size: 650%;
		}
		100% {
			background-size: 100%;
		}
	}
	@keyframes rainbow-text-simple-animation {
		0% {
			background-size: 100%;
		}
		80% {
			background-size: 650%;
		}
		100% {
			background-size: 650%;
		}
	}
	font-size: 3em;
	margin-bottom: 20px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	cursor: pointer;
	@media (max-width: 500px) {
		font-size: 4em;
	}
	@media (max-width: 350px) {
		font-size: 3em;
	}
	@media (max-width: 275px) {
		font-size: 2em;
	}
	&:hover {
		animation: rainbow-text-simple-animation 1s ease-in forwards;
	}
`;

const Seconds = styled.p`
	font-size: 30px;
	font-weight: bold;
	text-decoration: underline;
	text-decoration-color: #7830f2;
	color: #7830f2;
`;



export default function Redirect({ url }) {
    const [seconds, setSeconds] = useState(7);
    function removeOne() { setSeconds(seconds-1) };
    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => removeOne(), 1000);
        }
    }, [seconds]);
    setTimeout(() => {
      window.location.href = url;
    }, 7000);
    return (
        <Container>
            <HeaderWrapper>
                <Title onClick={() => window.open('http://localhost:1337')}>Share.lgbt</Title>
                <h2>You will be redirected soon</h2>
                <Seconds>{seconds} seconds...</Seconds>
            </HeaderWrapper>

            <AdWrapper>
                <p>Ads By Google</p>
            </AdWrapper>
        </Container>
    );
}
