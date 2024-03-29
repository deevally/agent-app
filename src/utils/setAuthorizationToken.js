import axios from 'axios';

/**
   *
   * @param {*} token
   * @returns {*} - state
   */
export default function setAuthorizationToken(token) {
  if (token) {
    return axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
