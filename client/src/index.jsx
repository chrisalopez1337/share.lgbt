import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: whitesmoke;
        color: #1c1c1c;
    }
`;

ReactDOM.render(
    <Fragment>
        <GlobalStyle />
        <App/>  
    </Fragment>,
    document.getElementById('app')
);
