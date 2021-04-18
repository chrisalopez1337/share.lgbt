import React, { useState, useEffect } from 'react';
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
  HatenaIcon,
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

export default function ShareModal({ url, display }) {
    return (
        <Container>
          <FacebookShareButton
            url={url}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <FacebookMessengerShareButton
            url={url}
            appId="521270401588372"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>

          <TwitterShareButton
            url={url}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <TelegramShareButton
            url={url}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>

          <WhatsappShareButton
            url={url}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <LinkedinShareButton url={url} >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <PinterestShareButton
            url={url}
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>

          <VKShareButton
            url={url}
          >
            <VKIcon size={32} round />
          </VKShareButton>

          <OKShareButton
            url={url}
          >
            <OKIcon size={32} round />
          </OKShareButton>

          <RedditShareButton
            url={url}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>

          <TumblrShareButton
            url={url}
          >
            <TumblrIcon size={32} round />
          </TumblrShareButton>

          <LivejournalShareButton
            url={url}
          >
            <LivejournalIcon size={32} round />
          </LivejournalShareButton>

          <MailruShareButton
            url={url}
          >
            <MailruIcon size={32} round />
          </MailruShareButton>

          <EmailShareButton
            url={url}
          >
            <EmailIcon size={32} round />
          </EmailShareButton>

          <ViberShareButton
            url={url}
          >
            <ViberIcon size={32} round />
          </ViberShareButton>

          <WorkplaceShareButton
            url={url}
          >
            <WorkplaceIcon size={32} round />
          </WorkplaceShareButton>

          <LineShareButton
            url={url}
          >
            <LineIcon size={32} round />
          </LineShareButton>

          <WeiboShareButton
            url={url}
          >
            <WeiboIcon size={32} round />
          </WeiboShareButton>

          <PocketShareButton
            url={url}
          >
            <PocketIcon size={32} round />
          </PocketShareButton>

          <InstapaperShareButton
            url={url}
          >
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>

          <HatenaShareButton
            url={url}
            windowWidth={660}
            windowHeight={460}
          >
            <HatenaIcon size={32} round />
          </HatenaShareButton>
      </Container>
    );
}
