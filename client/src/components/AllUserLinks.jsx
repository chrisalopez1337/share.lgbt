import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserLink from './UserLink.jsx';

export default function AllUserLinks({ userData }) {
    const [allLinks, setAllLinks] = useState(userData.links || []);
    useEffect(() => {
        if (!userData?.links) { return } else {
            setAllLinks(userData.links);
        }
    }, [userData])    

    return (
        <>
            <h1>All of your links</h1>
        { allLinks.map(link => <UserLink data={link} />)}
        </>
    );
}
