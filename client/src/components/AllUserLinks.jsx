import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import UserLink from './UserLink.jsx';

const Container = styled.div`
    margin: 50px 0px 50px 0px;
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
	margin-bottom: 25px;
`;

const Title = styled.h1`
	text-decoration: underline;
	text-decoration-color: #7830f2;
	color: #7830f2;
	margin-bottom: 25px;
`;

const PageButton = styled.button`
	margin: 0px 5px 0px 5px;
	padding: 5px 10px 5px 10px;
	background-color: ${(props) => (props.selected ? '#f53d7d' : '#7830f2')};
	border: 2px solid ${(props) => (props.selected ? '#f53d7d' : '#7830f2')};
	box-shadow: 0px 0px 15px 0px
		${(props) => (props.selected ? '#f53d7d' : 'transparent')};
	font-family: inherit;
	color: whitesmoke;
	border-radius: 100px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
`;

const MovementButton = styled.button`
    display: ${(props) => (props.hidden ? 'none' : 'inherit')}
	margin: 0px 5px 0px 5px;
	padding: 5px 10px 5px 10px;
	background-color: ${(props) => (props.active ? '#fcba03' : '#a3a3a3')};
	border: 2px solid ${(props) => (props.active ? '#fcba03' : '#a3a3a3')};
	&:hover {
		cursor: ${(props) => (props.active ? 'pointer' : 'inherit')};
		box-shadow: 0px 0px 15px 0px
			${(props) => (props.active ? '#a3a3a3' : 'transparent')};
	}
	font-family: inherit;
	color: whitesmoke;
	border-radius: 100px;
	font-size: 20px;
	font-weight: bold;
`;

export default function AllUserLinks({userData, copyText}) {
	const [allLinks, setAllLinks] = useState(userData.links || []);
	useEffect(() => {
		if (!userData?.links) {
		} else {
			setAllLinks(userData.links);
		}
	}, [userData]);

	const [linksToUse, setLinksToUse] = useState(allLinks);
	function handleLinksToSee(array, page = 1) {
		const newArray = [];
		const maxIndex = page * 10;
		let i = maxIndex - 10;
		while (i < maxIndex) {
			if (!array[i]) {
				break;
			}

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
		const pages = [];
		let count = 0;
		let page = 1;
		let i = 0;
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

	const [pagesToRender, setPagesToRender] = useState([]);
	useEffect(() => {
		setPagesToRender(pages.slice(0, 5));
	}, [pages]);

	function movePages(forward = true) {
		if (!forward && currentPage <= 5) {
			return;
		}

		if (forward) {
			setCurrentPage(pagesToRender[0] + 5);
			return setPagesToRender(
				pages.slice(pagesToRender[0] + 4, pagesToRender[4] + 5)
			);
		}

		setCurrentPage(pagesToRender[0] - 5);
		return setPagesToRender(
			pages.slice(pagesToRender[0] - 6, pagesToRender[0] - 1)
		);
	}

	useEffect(() => {
		handleLinksToSee(allLinks, currentPage);
	}, [currentPage]);

	return (
		<Container>
			<Title>All of your links</Title>
			<PageRow>
				<MovementButton
					active={!(pagesToRender[0] <= 5)}
					onClick={() => movePages(false)}
                    hidden={pagesToRender.length < 5}
				>
					Last 5...
				</MovementButton>
				{pagesToRender.map((pageNumber) => (
					<PageButton
						selected={pageNumber === currentPage}
						onClick={() => handlePageClick(pageNumber)}
					>
						{pageNumber}
					</PageButton>
				))}
				<MovementButton
					active={!(pagesToRender.length < 5)}
					onClick={() => movePages()}
                    hidden={pagesToRender.length < 5}
				>
					Next 5...
				</MovementButton>
                    { pagesToRender.length === 0 ? <h1>No URL's shortened</h1> : null }
			</PageRow>
			{linksToUse.map((link) => (
				<UserLink data={link} copyText={copyText} />
			))}
		</Container>
	);
}
