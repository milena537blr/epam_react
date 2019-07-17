import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import App from './components/App/App';
// import Article from './components/Article/Article';
import NotFound from './components/NotFound/NotFound';

export default (
  <Route path="/" component={NotFound}>
    <Route exact component={NotFound} />
  </Route>
);