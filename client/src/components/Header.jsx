import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0px 15px 0px 15px;
`;


const NavWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
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
        #f52c68 83.333%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-text-simple-animation-rev 1s ease forwards;
&:hover{
    animation: rainbow-text-simple-animation 1s ease-in forwards;
}

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

  font-size: 6em;
  margin-bottom: 0;
  margin-bottom: -0.25em;
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
`;


const NavButton = styled.button`
    margin: 0px 4px 0px 4px;
    font-family: inherit;
    font-size: 18px;
    font-weight: bold;
    color: whitesmoke;
    background-color: ${props => props.signup ? "#7830f2" : props.login ? "#7830f2" : props.support ? "#f52c68" : "transparent" };
    padding: 10px;
    border-radius: 7px;
    border: transparent; 
    cursor: pointer;
    transition-duration: 0.2s;
    &:hover {
        background-color: transparent;
        color: black;
        box-shadow: 0px 0px 25px 0px ${props => props.signup ? "#7830f2" : props.login ? "#7830f2" : props.support ? "#f52c68" : "transparent" };
    }
    @media (max-width: 500px) {
        font-size: 16px;
        padding: 9px;
    }
    @media (max-width: 350px) {
        font-size: 14px;
        padding: 8px;
    }
    @media (max-width: 330px) {
        font-size: 12px;
        padding: 7px;
    }
`;

export default function Header() {
    return (
        <Container>
            <Title>share.lgbt</Title>         
            <NavWrapper>
                <NavButton signup>Create Account</NavButton>
                <NavButton login>Log In</NavButton>
                <NavButton support>Support Us</NavButton>
            </NavWrapper>
        </Container>
    );
}
