import React from 'react';
import { Route } from 'react-router-dom';
import MainAgentBackOffice from './agentBackOffice/MainAgentBackOffice';
import Header from './Header';
import MainOwnerBackOffice from './ownerBackOffice/MainOwnerBackOffice';
import LoginPage from './ownerLoginComponent/LoginPage';
import privateRoute from '../utils/privateRoute';

/**
 * @class App
 */
class App extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <Route exact path="/" component={LoginPage} />
        <div className="hk-wrapper hk-vertical-nav">
          <Header />
          <div>
            <Route exact path="/agent-office" component={privateRoute(MainAgentBackOffice)} />
            <Route exact path="/owner-office" component={privateRoute(MainOwnerBackOffice)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
