import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import Article from './components/Article/Article';
import Card from './components/Card/Card';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Card} />
    <Route path="/cats" component={Article} />
  </Route>
);