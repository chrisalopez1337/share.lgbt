import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 0px 15px 0px 15px;
`;

const Logo = styled.h2`
    color: #2e96e6;
`;

export default function Header() {
    return (
        <Container>
            <Logo>share.lgbt</Logo>
        </Container>
    );
}
