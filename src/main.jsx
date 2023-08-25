import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '/src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from '/src/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <StrictMode>
            <App />
        </StrictMode>
    </Router>
);