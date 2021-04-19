import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import UserLink from './UserLink.jsx';

const Container = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #7830f2;
    padding: 20px 50px 40px 50px;
    border-radius: 7px;
    box-shadow: 0px 0px 15px 0px #7830f2;
    width: 600px;
`;

const PageRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Title = styled.h1`
    text-decoration: underline;
    text-decoration-color: #7830f2;
    color: #7830f2;
`;

const PageButton = styled.button`
    margin: 0px 5px 0px 5px;
    padding: 5px 10px 5px 10px;
    background-color: ${props => props.selected ? "#f53d7d" : "#7830f2" };
    border: 2px solid ${props => props.selected ? "#f53d7d" : "#7830f2" };
    box-shadow: 0px 0px 15px 0px ${props => props.selected ? "#f53d7d" : "transparent" };
    font-family: inherit;
    color: whitesmoke;
    border-radius: 100px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;

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
    const [currentPage, setCurrentPage] = useState(1);
    function handlePageClick(pageNumber) {
        handleLinksToSee(allLinks, pageNumber);
        setCurrentPage(pageNumber);
    }
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
        <Container>
            <Title>All of your links</Title>
            <PageRow>
                { pages.map(pageNumber => <PageButton selected={pageNumber === currentPage} onClick={() => handlePageClick(pageNumber)}>{pageNumber}</PageButton> )}
            </PageRow>
        { linksToUse.map(link => <UserLink data={link} />)}
        </Container>
    );
}
