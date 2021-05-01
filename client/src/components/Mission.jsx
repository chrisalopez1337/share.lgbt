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

const Li = styled.li`
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

const Link = styled.a`
    text-decoration: underline;
    text-decoration-color: #7830f2
    color: #7830f2;
    cursor: pointer;
`;

export default function Mission() {
    return (
        <>
        <Container>
            <Title>Mission</Title>
            <Message>
                Our mission with this application is simple. As the world moves more and more to the web, we also share more and more links. So why not do something productive with them? When you use our tool to shorten a link and it’s opened, the user will be sent to a brief redirect page with an advertisement. The revenue generated through this will be donated directly to a LGBTQA+ foundation in need of resources. You can also purchase a premium account for $1/month to receive links without any ad redirects and still support our cause! Waiting a few seconds to get to your next meme or article might be a minor inconvenience, but it can play a small part in helping change our world for the better. If you choose to help us in that change, thank you!
            </Message>
        </Container>

        <Container>
            <Title>Foundations</Title>
            <ul>
                <Li>LGBTQ Victory Fund: <Link href="https://www.victoryfund.org/">victoryfund.org</Link></Li>
                    <Li>Equality Federation: <Link href="https://equalityfederation.org/">equalityfederation.org</Link></Li>
                        <Li>Trans Lifeline: <Link href="https://translifeline.org/">translifeline.org</Link></Li>
            </ul>
        </Container>
        </>
    );
}
