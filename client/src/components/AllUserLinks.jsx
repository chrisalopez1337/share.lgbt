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
    function handleLinksToSee(array, page = 1) {
        let newArray = [];
        let maxIndex = (page * 10),
            i = maxIndex - 10;
        while (i < maxIndex) {
            if (!array[i]) { break }
            newArray.push(array[i]);
            i++;
        }
        setLinksToUse(newArray);
    }
    useEffect(() => {
        handleLinksToSee(allLinks);
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

    console.log(pages);
    console.log(allLinks.length)

    return (
        <>
            <h1>All of your links</h1>
        { linksToUse.map(link => <UserLink data={link} />)}
            { pages.map(pageNumber => <button onClick={() => handleLinksToSee(allLinks, pageNumber)}>{pageNumber}</button> )}
        </>
    );
}
