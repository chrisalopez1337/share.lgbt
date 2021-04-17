import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.form`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #7830f2;
    padding: 20px 50px 40px 50px;
    border-radius: 7px;
    box-shadow: 0px 0px 15px 0px #7830f2;
`;


const Title = styled.h1`
     font-size: 2.75em;
`;

const Input = styled.input`
   background-color: transparent;
   border: 3px solid #f53d7d;
   border-radius: 10px;
   padding: 5px;
   font-family: inherit;
   font-weight: 400;
   font-size: 17px;
   width: 350px;
   margin-bottom: 20px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`;

const SubmitButton = styled.button`
   border: 2px solid #f53d7d;
   background-color: #f53d7d;
   padding: 5px;
   font-family: inherit;
   font-size: 17px;
   border-radius: 7px;
   color: whitesmoke;
   margin-left: 5px;
   cursor: pointer;
   transition-duration: 0.2s;
   margin-bottom: 20px;
   &:hover {
        background-color: #7830f2;
        box-shadow: 0px 0px 15px 0px #7830f2;
   }
`;

const Link = styled.h2`
    padding: 7px;
    background-color: #c9bfc3;
    color: #af36f5;
    font-size: 20px;
    border-radius: 7px;
`;

export default function Converter({ shortLink, handleShortLink, handleSubmit, redirect_link }) {
    return (
        <Container onSubmit={handleSubmit}>
            <Title>Shorten URL</Title>
            <Row>
                <Input type="text" name="redirect_url" value={redirect_link} onChange={handleShortLink} />
                <SubmitButton>Shorten</SubmitButton>
            </Row>
            {shortLink?.length > 0 ? <Link>{shortLink}</Link> : null }
        </Container>
    );
}
