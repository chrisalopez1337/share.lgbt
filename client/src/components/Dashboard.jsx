import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Converter from './Converter.jsx';


export default function Dashboard({ redirect_link, copyText, shortLink, handleShortLink, handleSubmit }) {
    return (
        <>
            <Converter copyText={copyText} shortLink={shortLink} handleShortLink={handleShortLink} handleSubmit={handleSubmit} redirect_link={redirect_link} />
        </>
    );
}
