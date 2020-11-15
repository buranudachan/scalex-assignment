import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../assets/vendors/style';
import '../assets/styles/wieldy.less';
import App from './containers/App/index';
import Users from './containers/App/users';

const NextApp = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/users' component={Users} />
    </Switch>
  </BrowserRouter>

export default NextApp;
