import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: whitesmoke;
        color: #1c1c1c;
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }

    h1,h2,h3,h4,h5,h6 {
        padding: 0;
        margin: 10px;
    }
`;

ReactDOM.render(
	<>
        <Router>
		    <GlobalStyle />
		    <App />
        </Router>
	</>,
	document.querySelector('#app')
);
