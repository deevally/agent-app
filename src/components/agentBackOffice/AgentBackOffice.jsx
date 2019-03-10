import React from 'react';
import BalancePanel from './BalancePanel';
import ServicePanel from './ServicePanel';
import RecentTransactionPanel from './RecentTransactionsPanel';
import Footer from '../Footer';

/**
 * @class AgentBackOffice
 */
class AgentBackOffice extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const agentBackOffice = (
      <div className="hk-pg-wrapper">
        <div className="container mt-xl-50 mt-sm-30 mt-15">
          <BalancePanel />
          <ServicePanel />
          <RecentTransactionPanel />
          <Footer />
        </div>
      </div>
    );
    return <div>{agentBackOffice}</div>;
  }
}

export default AgentBackOffice;
