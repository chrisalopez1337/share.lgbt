import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 50px 0px 50px 0px;
	display: flex;
    flex-wrap: wrap;
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

const Title = styled.h1``;

const Message = styled.p`
    font-size: 20px;
    word-spacing: 2px;
    line-height: 30px;
    font-weight: bold;
    @media (max-width: 600px) {
        font-size: 18px;
    }
    @media (max-width: 450px) {
        font-size: 16px;
    }
`;
export default function Mission() {
    return (
        <Container>
            <Title>Mission</Title>
            <Message>
                Our mission with this application is simple. As the world moves more and more to the web, we also share more and more links. So why not do something productive with them? When you shorten a link and its opened, a user is directed to a short redirect page with an advertisment. The revenue generated through this is directly donated to a LGBTQA+ foundation in need of resources. (List of them here if you want to make direct donations) You can also purchase a premium account for $1/month to recieve links without any ad redirects and still support our cause! By no means is waiting a few seconds to get to your next meme or article convient, but it can play a small part in changing our world today. If you choose to help us in that change, thank you!
            </Message>
        </Container>
    );
}
