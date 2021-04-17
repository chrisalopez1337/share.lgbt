import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border: 3px solid #3ae7f0;
    border-radius: 7px;
    min-width: 550px;
    margin: 10px 10px 10px 10px;
    padding: 0px 10px 0px 10px;
    transition-duration: 0.2s;
    &:hover {
        box-shadow: 0px 0px 10px 0px #7830f2;
        border: 3px solid #7830f2;
        cursor: pointer;
    }
`;

const Column = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0px 10px 0px 10px;
`;

const Link = styled.h2`
    padding: 7px 10px 7px 10px;
    background-color: #e1dee3;
    color: #af36f5;
    font-size: 20px;
    font-weight: 400;
    border-radius: 7px;
`;

const Header = styled.p`
    font-weight: bold;
    text-decoration: underline;
`;

const RedirectLink = styled.h3`
    color: #3b3b3b;
`;


export default function TempUrlItem({ short_link, redirect_link, clicks }) {
    return (
        <Row>
            <Column>
                <Header>Short Url:</Header>
                <Link>{short_link}</Link>
            </Column>

            <Column>
                <Header>Links To:</Header>
                <RedirectLink>{redirect_link}</RedirectLink>
            </Column>

        </Row>
    );
}
