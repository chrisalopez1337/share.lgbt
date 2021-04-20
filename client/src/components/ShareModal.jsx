import React, {useState, useEffect} from 'react';
import {
	FacebookShareCount,
	PinterestShareCount,
	VKShareCount,
	OKShareCount,
	RedditShareCount,
	TumblrShareCount,
	HatenaShareCount,
	FacebookShareButton,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	LinkedinShareButton,
	TwitterShareButton,
	PinterestShareButton,
	VKShareButton,
	OKShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	RedditShareButton,
	EmailShareButton,
	TumblrShareButton,
	LivejournalShareButton,
	MailruShareButton,
	ViberShareButton,
	WorkplaceShareButton,
	LineShareButton,
	WeiboShareButton,
	PocketShareButton,
	InstapaperShareButton,
	HatenaShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	PinterestIcon,
	VKIcon,
	OKIcon,
	TelegramIcon,
	WhatsappIcon,
	RedditIcon,
	TumblrIcon,
	MailruIcon,
	EmailIcon,
	LivejournalIcon,
	ViberIcon,
	WorkplaceIcon,
	LineIcon,
	PocketIcon,
	InstapaperIcon,
	WeiboIcon,
	HatenaIcon
} from 'react-share';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	flex-direction: row;
	max-width: 500px;
	padding: 10px;
	border: 2px solid #454545;
	border-radius: 10px;
	box-shadow: 0px 0px 15px 0px #454545;
	z-index: 100;
	position: relative;
	background-color: whitesmoke;
`;

const CloseButton = styled.button`
	border: 2px solid #f53d7d;
	background-color: #f53d7d;
	padding: 5px;
	font-family: inherit;
	font-size: 17px;
	font-weight: bold;
	border-radius: 7px;
	color: whitesmoke;
	margin-left: 10px;
	cursor: pointer;
	transition-duration: 0.2s;
	&:hover {
		background-color: #7830f2;
		box-shadow: 0px 0px 15px 0px #7830f2;
	}
`;

export default function ShareModal({url, display}) {
	return (
		<Container>
			<FacebookShareButton url={url}>
				<FacebookIcon round size={32} />
			</FacebookShareButton>

			<FacebookMessengerShareButton url={url} appId="521270401588372">
				<FacebookMessengerIcon round size={32} />
			</FacebookMessengerShareButton>

			<TwitterShareButton url={url}>
				<TwitterIcon round size={32} />
			</TwitterShareButton>

			<TelegramShareButton url={url}>
				<TelegramIcon round size={32} />
			</TelegramShareButton>

			<WhatsappShareButton url={url} separator=":: ">
				<WhatsappIcon round size={32} />
			</WhatsappShareButton>

			<LinkedinShareButton url={url}>
				<LinkedinIcon round size={32} />
			</LinkedinShareButton>

			<PinterestShareButton url={url}>
				<PinterestIcon round size={32} />
			</PinterestShareButton>

			<VKShareButton url={url}>
				<VKIcon round size={32} />
			</VKShareButton>

			<OKShareButton url={url}>
				<OKIcon round size={32} />
			</OKShareButton>

			<RedditShareButton url={url} windowWidth={660} windowHeight={460}>
				<RedditIcon round size={32} />
			</RedditShareButton>

			<TumblrShareButton url={url}>
				<TumblrIcon round size={32} />
			</TumblrShareButton>

			<LivejournalShareButton url={url}>
				<LivejournalIcon round size={32} />
			</LivejournalShareButton>

			<MailruShareButton url={url}>
				<MailruIcon round size={32} />
			</MailruShareButton>

			<EmailShareButton url={url}>
				<EmailIcon round size={32} />
			</EmailShareButton>

			<ViberShareButton url={url}>
				<ViberIcon round size={32} />
			</ViberShareButton>

			<WorkplaceShareButton url={url}>
				<WorkplaceIcon round size={32} />
			</WorkplaceShareButton>

			<LineShareButton url={url}>
				<LineIcon round size={32} />
			</LineShareButton>

			<WeiboShareButton url={url}>
				<WeiboIcon round size={32} />
			</WeiboShareButton>

			<PocketShareButton url={url}>
				<PocketIcon round size={32} />
			</PocketShareButton>

			<InstapaperShareButton url={url}>
				<InstapaperIcon round size={32} />
			</InstapaperShareButton>

			<HatenaShareButton url={url} windowWidth={660} windowHeight={460}>
				<HatenaIcon round size={32} />
			</HatenaShareButton>
		</Container>
	);
}
