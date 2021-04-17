import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #353536;
    padding: 20px 50px 40px 50px;
    border-radius: 7px;
    box-shadow: 0px 0px 15px 0px #353536;
    width: 500px;
`;

const Link = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #7830f2;
    color: #7830f2;
    cursor: pointer;
    transition-duration: 0.2s;
    &:hover {
        color: #f53d7d;
        text-decoration-color: #f53d7d;
    }
`;

export default function TemporaryUrls() {
    return (
        <Container>
            <h1>Recent URL's</h1>
            <Link>Create an account to store all urls and more!</Link>
        </Container>
    );
}