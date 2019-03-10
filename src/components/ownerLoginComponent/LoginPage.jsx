import React from 'react';
import LoginForm from './LoginForm';
import Footer from '../Footer';

/**
 * @description Login form component
 *
 * @class LoginPage
 *
 * @param {object} event
 *
 * @extends {Component}
 */
class LoginPage extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const loginPage = (
      <div>
        <div className="hk-wrapper">
          <div className="hk-pg-wrapper hk-auth-wrapper">
            <header className="d-flex justify-content-between align-items-center">
              <a className="d-flex auth-brand" href="#">
                <img className="brand-img" src="../../../public/dist/img/logo_dark.png" alt="brand" />
              </a>
              <div className="btn-group btn-group-sm">
                <a href="#" className="btn btn-outline-secondary">Help</a>
                <a href="#" className="btn btn-outline-secondary">About Us</a>
              </div>
            </header>
            <div className="container-fluid">
              <LoginForm />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{loginPage}</div>;
  }
}

export default LoginPage;
