import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logoutAction from '../../actions/logoutAction';

/**
 * @class TopNavigation
 */
class TopNavigation extends React.Component {
  /**
   * @description handle user log out
   *
   * @param {Object} event logout event object
   *
   * @memberof Header
   *
   * @returns {undefined} calls logoutProps
   */
  onLogout = (event) => {
    const { logoutUser } = this.props;
    const { router } = this.context;
    event.preventDefault();
    logoutUser(router.history.push('/'));
  }

  /**
   *
   * @returns {*} - render
   */
  render() {
    const topNavigation = (
      <div>
        <nav className="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
          <a
            id="navbar_toggle_btn"
            className="navbar-toggle-btn nav-link-hover"
            href="javascript:void(0);"
          >
            <span className="feather-icon">
              <i data-feather="menu" />
            </span>
          </a>
          <a className="navbar-brand" href="dashboard1.html">
            <img
              className="brand-img d-inline-block"
              src="../../../public/dist/img/logo_dark.png"
              alt="brand"
            />
          </a>
          <ul className="navbar-nav hk-navbar-content">
            <li className="nav-item">
              <a
                id="navbar_search_btn"
                className="nav-link nav-link-hover"
                href="javascript:void(0);"
              >
                <span className="feather-icon">
                  <i data-feather="search" />
                </span>
              </a>
            </li>
            <li className="nav-item dropdown dropdown-authentication">
              <a
                className="nav-link dropdown-toggle no-caret"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="media">
                  <div className="media-img-wrap">
                    <div className="avatar">
                      <img
                        src="../../../public/dist/img/avatar12.jpg"
                        alt="user"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <span className="badge badge-success badge-indicator" />
                  </div>
                  <div className="media-body">
                    <span>
                      Madelyn Shane
                      <i className="zmdi zmdi-chevron-down" />
                    </span>
                  </div>
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                data-dropdown-in="flipInX"
                data-dropdown-out="flipOutX"
              >
                <a className="dropdown-item" href="profile.html">
                  <i className="dropdown-icon zmdi zmdi-account" />
                  <span>Profile</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon zmdi zmdi-card" />
                  <span>My balance</span>
                </a>
                <a className="dropdown-item" href="inbox.html">
                  <i className="dropdown-icon zmdi zmdi-email" />
                  <span>Inbox</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="dropdown-icon zmdi zmdi-settings" />
                  <span>Settings</span>
                </a>
                <div className="dropdown-divider" />
                <div className="sub-dropdown-menu show-on-hover">
                  <a
                    href="#"
                    className="dropdown-toggle dropdown-item no-caret"
                  >
                    <i className="zmdi zmdi-check text-success" />
                    Online
                  </a>
                  <div className="dropdown-menu open-left-side">
                    <a className="dropdown-item" href="#">
                      <i className="dropdown-icon zmdi zmdi-check text-success" />
                      <span>Online</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="dropdown-icon zmdi zmdi-circle-o text-warning" />
                      <span>Busy</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="dropdown-icon zmdi zmdi-minus-circle-outline text-danger" />
                      <span>Offline</span>
                    </a>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item" href="#"
                  onClick={this.onLogout}
                >
                  <i
                    className="dropdown-icon zmdi zmdi-power"
                    
                  />
                  <span>Log out</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
    return <div>{topNavigation}</div>;
  }
}

TopNavigation.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

TopNavigation.contextTypes = {
  router: PropTypes.shape({}).isRequired
};


const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutAction())
});


export default connect(null,
  mapDispatchToProps
)(TopNavigation);
