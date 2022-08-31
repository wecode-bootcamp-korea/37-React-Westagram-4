import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
// js는 scss보다 위에 위치하는 것이 convention.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
