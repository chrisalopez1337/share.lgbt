import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Converter from './Converter.jsx';
import AllUserLinks from './AllUserLinks.jsx';


export default function Dashboard({ userData, redirect_link, copyText, shortLink, handleShortLink, handleSubmit }) {
    console.log(userData);
    return (
        <>
            <Converter copyText={copyText} shortLink={shortLink} handleShortLink={handleShortLink} handleSubmit={handleSubmit} redirect_link={redirect_link} />
            <AllUserLinks userData={userData} />
        </>
    );
}
