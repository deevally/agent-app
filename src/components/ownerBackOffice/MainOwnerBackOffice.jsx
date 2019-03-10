import React from 'react';
import OwnerSideNavigation from './OwnerSideNavigation';
import OwnerBackOffice from './OwnerBackOffice';

/**
 * @class MainOwnerBackOffice
 */
class MainOwnerBackOffice extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    return (
      <div>
        <OwnerSideNavigation />
        <OwnerBackOffice />
      </div>
    );
  }
}

export default MainOwnerBackOffice;
