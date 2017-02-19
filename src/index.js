import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Main from './Main';
import Content from './components/body/Content';
import Home from './components/body/Home';
import About from './components/body/About';

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
