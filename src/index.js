import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Clock from './Clock';
//import App from './App';
// import Toggle from './Toggle';
import Greeting from './Greeting';

// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
// ReactDOM.render(<Toggle />, document.getElementById('root'));
ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById('root'));
