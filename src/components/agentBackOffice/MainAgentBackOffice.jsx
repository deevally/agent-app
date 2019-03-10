import React from 'react';
import MasterAgentSideNavigation from './SideNavigation';
import AgentBackOffice from './AgentBackOffice';

/**
 * @class MainAgentBackOffice
 */
class MainAgentBackOffice extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <div>
          <MasterAgentSideNavigation />
          <AgentBackOffice />
        </div>
      </div>
    );
  }
}

export default MainAgentBackOffice;
