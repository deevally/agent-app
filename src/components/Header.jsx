import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GuestNavigation from './navigation/GuestNavigation';
import TopNavigation from './navigation/TopNavigation';

/**
 * @class Header
 */
class Header extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const { ownerAuth } = this.props;
    return (
      <div>
        {ownerAuth.isAuthenticated ? <TopNavigation /> : <GuestNavigation /> }
      </div>
    );
  }
}

Header.propTypes = {
  ownerAuth: PropTypes.shape({})
};

const mapStateToProps = state => ({
  ownerAuth: state.ownerAuth
});

export default connect(mapStateToProps)(Header);
