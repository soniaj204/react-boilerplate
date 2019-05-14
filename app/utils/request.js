import 'whatwg-fetch';
import { push } from 'react-router-redux';
import { userExists, logout, authUser } from './Helper';
import { store } from '../app';
import AuthTokenService from './AuthTokenService';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 304) {
    return response;
  }
  if (response.status === 401 || response.status === 498) {
    logout();
    store.dispatch(push('/login'));
    return response;
  }
  if (response.status === 403) {
    authUser();
    store.dispatch(push('/'));
    return response;
  }
  if (
    response.status === 422 ||
    response.status === 400 ||
    response.status === 500 ||
    response.status === 504
  ) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

export default function request(url, options) {
  const option = {
    method: options.method,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  if (options.body) {
    option.body = JSON.stringify(options.body);
  }
  if (options.data) {
    option.body = options.data;
  }
  if (options.headers) {
    option.headers = options.headers;
  }
  if (userExists() && !options.Authorization) {
    option.headers.Authorization = AuthTokenService.get();
  }
  let response = '';
  if (options.Authorization) {
    response = fetch(url, option).then(checkStatus);
  } else {
    response = fetch(url, option)
      .then(checkStatus)
      .then(parseJSON);
  }

  return response;
}
