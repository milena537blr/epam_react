import React from 'react';
import ReactDOM from 'react-dom';
import data from "./data/data.json";
import App from './components/App/App';
import './styles/global.scss';

ReactDOM.render (<App data={data}/>, window.document.getElementById ('root'));
