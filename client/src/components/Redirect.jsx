import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Redirect({ url }) {
    const [seconds, setSeconds] = useState(5);
    setInterval(() => {
        setSeconds(seconds-1)
    }, 1200);
    setTimeout(() => {
        window.location.href = url;
    }, 5000);
    return (
        <>
            <h1>Redirect</h1>
            <h1>{url}</h1>
            <h1>{seconds}</h1>
        </>
    );
}
