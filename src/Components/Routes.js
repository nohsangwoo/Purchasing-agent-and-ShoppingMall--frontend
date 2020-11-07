import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from '../Routes/Auth';
import Feed from '../Routes/Feed';
import Calculator from '../Routes/Calculator';
import Help from '../Routes/Help';
import Search from '../Routes/Search';
import Profile from '../Routes/Profile';
import Order from '../Routes/Order';
import NotFound from '../Routes/NotFound';
import Cart from '../Routes/Cart';
import ConfirmSecret from '../Routes/ConfirmSecret';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/order/:username" component={Order} />
    <Route path="/calculator" component={Calculator} />
    <Route path="/search" component={Search} />
    <Route path="/help" component={Help} />
    <Route path="/profile/:username" component={Profile} />
    <Route path="/cart/:username" component={Cart} />
    <Route component={NotFound} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/confirmSecret/:loginSecret" component={ConfirmSecret} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
