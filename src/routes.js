import React from 'react';
import { Switch, Route } from 'react-router-dom';
import City from './pages/City';
import Brazil from './pages/Brazil';
import Page_404 from './pages/Page_404';

function Routes() {
  return (

      <Switch>
        <Route path="/" exact component={Brazil} />
        <Route path="/city" exact component={City} />
        <Route component={Page_404} />
      </Switch>

  );
}

export default Routes;
