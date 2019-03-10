import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

export default (ComposedComponent) => {
  /**
 * @class Authenticate
 */
  class Authenticate extends Component {
    // eslint-disable-next-line require-jsdoc
    componentWillMount() {
      const { router } = this.context;
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        toastr.error('Please login');
        router.history.push('/');
      }
    }

    // eslint-disable-next-line require-jsdoc
    componentWillUpdate(nextProps) {
      const { router } = this.context;
      if (!nextProps.isAuthenticated) {
        router.history.push('/');
      }
    }

    /**
   *
   * @returns {*} - render
   */
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propsTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  Authenticate.contextTypes = {
    router: PropTypes.shape({}).isRequired
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.ownerAuth.isAuthenticated
  });

  return connect(mapStateToProps)(Authenticate);
};
