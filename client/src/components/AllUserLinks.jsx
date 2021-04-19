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

    const [linksToUse, setLinksToUse] = useState(allLinks);
    const [index, setIndex] = useState(0);
    function handleLinksToSee(array, startIndex = index, search = 20) {
        const newArray = [];
        let tracker = startIndex
        for (let i = startIndex; i < (startIndex + search); i++ ) {
            if (!array[i]) { break };
            tracker++;
            newArray.push(array[i]);
        }
        setLinksToUse(newArray);
        setIndex((tracker - startIndex));
    }
    useEffect(() => {
        handleLinksToSee(allLinks, 0, 10);
    }, [allLinks]);

    const [pages, setPages] = useState([]);
    function generatePages() {
        let pages = [];
        let count = 0,
            page = 1,
            i = 0;
        while (i < allLinks.length) {
            count++;
            i++;
            if (count === 10) {
                pages.push(page);
                page++;
                count = 0;
            }
        }
        if (count > 0) {
            pages.push(page);
        }
        setPages(pages);
    }
    useEffect(() => {
        generatePages();
    }, [allLinks]);


    return (
        <>
            <h1>All of your links</h1>
        { linksToUse.map(link => <UserLink data={link} />)}
            { pages.map(pageNumber => <h1>{pageNumber}</h1> )}
        </>
    );
}
