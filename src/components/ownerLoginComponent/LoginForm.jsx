import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '../common/TextField';
import UserInputValidation from '../../middlewares/validateLoginInput';
import ownerLoginRequest from '../../actions/ownerLoginAction';

/**
 * @description Login form component
 *
 * @class LoginForm
 *
 * @param {object} event
 *
 * @extends {Component}
 */
class LoginForm extends React.Component {
 state = {
   username: '',
   password: '',
   errors: {}
 };


 /**
   *
   * @param {*} event
   * @returns {*} - state
   */
 onChange = (event) => {
   const { errors } = this.state;
   if (errors[event.target.name]) {
     const newErrors = Object.assign({}, errors);
     delete newErrors[event.target.name];
     this.setState({
       [event.target.name]: event.target.value,
       errors: newErrors
     });
   } else {
     this.setState({
       [event.target.name]: event.target.value
     });
   }
 }


 /**
   *
   * @param {*} event
   * @returns {*} - state
   */
 onSubmit = (event) => {
   event.preventDefault();
   if (this.isValid()) {
     this.setState({ errors: {} });
     this.props.ownerLoginRequest(this.state);
   }
 }

 /**
   *
   * @param {*} event
   * @returns {*} - state
   */
 isValid = () => {
   const { errors, isValid } = UserInputValidation.loginInputValidation(
     this.state
   );
   if (!isValid) {
     this.setState({ errors, password: '' });
   }

   return isValid;
 }

 /**
   *
   * @returns {*} - render
   */
 render() {
   const { username, password, errors } = this.state;

   const { ownerAuth } = this.props;

   if (ownerAuth) {
     return <Redirect to="/owner-office" />;
   }

   const loginForm = (
     <div className="login-page">
       <div className="col-xl-12 pa-0">
         <div className="auth-form-wrap py-xl-0 py-40">
           <div className="auth-form w-xxl-55 w-xl-75 w-sm-90 w-xs-100">
             <h1 className="display-4 mb-10">Welcome Back :)</h1>
             <p className="mb-30">Sign in to your account and enjoy unlimited perks.</p>
             <div className="form-group">
               <TextField
                 error={errors.username}
                 onChange={this.onChange}
                 className="myusername"
                 placeholder="Username"
                 value={username}
                 field="username"
                 type="text"
               />
             </div>
             <div className="form-group">
               <div className="input-group">
                 <TextField
                   error={errors.password}
                   onChange={this.onChange}
                   className="mypassword"
                   placeholder="Password"
                   value={password}
                   field="password"
                   type="password"
                 />
                 <div className="input-group-append">
                   <span className="input-group-text"><span className="feather-icon"><i data-feather="eye-off" /></span></span>
                 </div>
               </div>
             </div>
             <div className="custom-control custom-checkbox mb-25">
               <input
                 className="custom-control-input"
                 id="same-address"
                 type="checkbox"
               />
               <label className="custom-control-label font-14" htmlFor="same-address">Keep me logged in</label>
             </div>
             <a
               href="/agent-office" className="btn btn-primary btn-block"
               onClick={this.onSubmit}
             >
              Login
             </a>
             <p className="font-14 text-center mt-15">Having trouble logging in?</p>
           </div>
         </div>
       </div>
     </div>
   );
   return <div>{loginForm}</div>;
 }
}

LoginForm.propTypes = {
  ownerLoginRequest: PropTypes.func.isRequired,
  error: PropTypes.shape({}),
  ownerAuth: PropTypes.bool,
};

const mapStateToProps = state => ({
  ownerAuth: state.ownerAuth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  ownerLoginRequest: user => dispatch(ownerLoginRequest(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
