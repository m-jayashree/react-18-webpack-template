import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import RouteEnum from '../constants/RouteEnum';
import MainNav from './components/main-nav/MainNav';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import Toasts from './components/toasts/Toasts';
import environment from 'environment';

const LoginPage = lazy(() => import('./login-page/LoginPage'));
const HomePage = lazy(() => import('./home-page/HomePage'));
const NotFoundPage = lazy(() => import('./not-found-page/NotFoundPage'));

export default function App(props) {
  return (
    <div id={environment.common_settings.brandCode === 'PO' ? 'brand-PO' : 'brand-Cunard'} className="__cuk-master-class">
      <ConnectedRouter history={props.history}>
        <Suspense fallback={<LoadingIndicator isActive={true} />}>
          <MainNav />
          <Switch>
            <Route path={RouteEnum.Login} component={LoginPage} exact={true} />
            <Route exact={true} path={RouteEnum.Home} component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Toasts />
        </Suspense>
      </ConnectedRouter>
    </div>
  );
}
