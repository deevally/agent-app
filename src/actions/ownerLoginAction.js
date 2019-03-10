import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookie from 'cookies-js';
import toastr from 'toastr';
import config from '../config/index';
import routes from '../constants/routes';
import { SET_CURRENT_USER, SET_CURRENT_USER_FAIL, SET_CURRENT_OWNER_ROLE } from './types';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const setCurrentUserError = error => ({
  type: SET_CURRENT_USER_FAIL,
  error
});

export const setOwnerRole = role => ({
  type: SET_CURRENT_OWNER_ROLE,
  role
});

const ownerLoginRequest = ownerDetails => (dispatch) => {
  const owner = ownerDetails;
  return axios.post(`${config.apiUrl}${routes.LOGIN}`, owner).then((response) => {
    const { message } = response.data;
    const { token } = response.data.data;
    Cookie.set('jwtToken', token);
    toastr.success(message);
    dispatch(setCurrentUser(jwt.decode(token)));
  }).catch((error) => {
    const { message } = error.response.data;
    toastr.error(message);
    dispatch(setCurrentUserError(message));
  });
};

export default ownerLoginRequest;
