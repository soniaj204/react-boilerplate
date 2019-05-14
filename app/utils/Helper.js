import { toast } from 'react-toastify';
import sha512 from 'sha512';
import base from 'base-64';
import ReactGA from 'react-ga';
import { scroller, animateScroll } from 'react-scroll';
import { API_URL } from 'containers/App/constants';
import request from './request';
import AuthTokenService from './AuthTokenService';
import StorageService from './StorageService';

/**
 * check user are login or not
 * @author Innovify
 */
export function userExists() {
  if (AuthTokenService.exists()) {
    AuthTokenService.init();
    return true;
  }
  return false;
}

export function userDetails() {
  return new Promise((resolve, reject) => {
    try {
      const data = { method: 'GET' };
      const requestURL = `${API_URL}user/user-profile`;
      request(requestURL, data).then(res => {
        StorageService.set('unAuthorize', false);
        resolve(res);
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * call userdetail api
 * @author Innovify
 */
export function authUser() {
  StorageService.set('unAuthorize', true);
}
/**
 * print a notification if page un-mount the component before the notification load
 * @author Innovify
 */

export function showStoredNotification() {
  toast.dismiss();
  const options = {};
  if (StorageService.exists('Notification')) {
    options.type = StorageService.get('NotificationType');
    if (options.type) {
      switch (options.type) {
        case 'success':
          options.className = 'Toast-success';
          break;
        case 'error':
          options.className = 'Toast-error';
          break;
        default:
          options.className = '';
      }
    }
    toast(StorageService.get('Notification'), options);
  }
  StorageService.delete('Notification');
  StorageService.delete('NotificationType');
}

/**
 * get userId
 * @author Innovify
 * @Developer Innovify
 */
export function userId() {
  if (AuthTokenService.exists()) {
    return StorageService.get('user').userId;
  }
  return false;
}

/**
 * Google GA.
 * @author Innovify
 * @Developer Innovify
 */

export function pageView() {
  ReactGA.set({ page: window.location.href });
  ReactGA.pageview(window.location.href);
  if (AuthTokenService.exists()) {
    ReactGA.set({ userId: userId() });
  }
}

/**
 * print a notification if page un-mount the component before the notification load
 * also support when Google GA adds.
 * @author Innovify
 * @Developer Innovify
 */

export function pageUpdate() {
  // pageView();
  animateScroll.scrollToTop();
  showStoredNotification();
}

/**
 * to logout user from system
 * @author Innovify
 * @Developer Innovify
 */
export function logout() {
  AuthTokenService.clear();
  StorageService.clear();
  StorageService.delete('fcmToken');
}

/**
 * password encryption on submit form to server.
 * @author Innovify
 * @Developer Innovify
 */
export function passwordEncrypt(value) {
  const hash = sha512(value);
  return hash.toString('hex');
}

/**
 * Base encode decode.
 * @author Innovify
 * @Developer Innovify
 */
export function baseEncodeDecode(value, encode = false) {
  if (encode) {
    return base.encode(value);
  }
  return base.decode(value);
}

/**
 * User comes first time.
 * @author Innovify
 * @Developer Innovify
 */
export function onBoarding() {
  const user = StorageService.get('user');
  if (user.firstTimeLogin) {
    delete user.firstTimeLogin;
    StorageService.set('user', user);
    return true;
  }
  return false;
}

export function userIcon() {
  let username = 'SC';
  if (StorageService.get('user')) {
    const user = StorageService.get('user');
    username = user.firstName.charAt(0) + user.surname.charAt(0);
  }
  return username;
}

/**
 * get user Roles
 * @author Innovify
 * @Developer Innovify
 */
export function getUserRole() {
  const user = StorageService.get('user');
  return user.userRole;
}

/**
 * get user Details
 * @author Innovify
 * @Developer Innovify
 */
export function getUserDetail() {
  const user = StorageService.get('user');
  if (user) {
    return user;
  }
  return false;
}

/**
 * set location when user click on directly on private url
 * @author Innovify
 * @Developer Innovify
 */
export function setNextLocation(location) {
  StorageService.set('location', location);
  return false;
}

/**
 * get location when user click on directly on private url
 * @author Innovify
 * @Developer Innovify
 */
export function getLocation() {
  if (StorageService.get('location')) {
    return StorageService.get('location');
  }
  return false;
}

/**
 * clear location when user click on directly on private url
 * @author Innovify
 * @Developer Innovify
 */
export function clearLocation() {
  StorageService.delete('location');
  return true;
}

/**
 * convert time zone from locale
 * @author Innovify
 * @Developer Innovify
 */

export function convertUTCDateToLocalDate(date) {
  return date;
}

/**
 * convert time zone from locale
 * @author Innovify
 * @Developer Innovify
 */

export function removeDuplicates(arr) {
  const uniqueArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i].toLowerCase()) === -1) {
      uniqueArray.push(arr[i].toLowerCase());
    }
  }
  return uniqueArray;
}

/**
 * remove duplicate values from json array.
 * @author Innovify
 */
export function removeDuplicatesJsonArray(myArr, prop) {
  // eslint-disable-next-line arrow-body-style
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

/**
 * scroll to particular element
 * @author Innovify
 * @Developer Innovify
 */
export function scrollToFirstError(fieldName) {
  if (document.querySelectorAll(`[name="${fieldName}"]`).length) {
    scroller.scrollTo(fieldName, { offset: -100, smooth: true });
  }
  return true;
}

/**
 * make ramdon name of 20 character.
 * @author Innovify
 */

export function makeName() {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 20; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  text += new Date().getTime();
  return text;
}

/**
 * make ramdon name of 20 character.
 * @author Innovify
 */

export function getYearArray() {
  const year = [];
  const currentYear = new Date().getFullYear();
  // eslint-disable-next-line no-plusplus
  for (let i = 1970; i <= currentYear; i++) {
    year.push(i);
  }
  return year;
}

/**
 * make ageRange character.
 * @author Innovify
 */

export function getAgeRange() {
  const age = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 25; i++) {
    age.push({
      id: i,
      val: i,
    });
  }
  return age;
}

/**
 * make an array for month.
 * @author Innovify
 */
export function getMonthArray() {
  const monthYear = [];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < month.length; i++) {
    const obj = {
      id: i,
      val: month[i],
    };
    monthYear.push(obj);
  }
  return monthYear;
}

/**
 * Find youtube Url in string.
 * @author Innovify
 */

export function getLink(str) {
  /* eslint-disable no-useless-escape */
  if (
    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/.test(
      str,
    )
  ) {
    /* eslint-disable no-useless-escape */ const matches = str.match(
      /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/g,
    );
    return matches[matches.length - 1];
  }
  return false;
}

/**
 *
 * @param url
 * @returns {{type: (string|string), id: *}}
 *
 *  Supported YouTube URL formats:
 *  http://www.youtube.com/watch?v=My2FRPA3Gf8
 *  http://youtu.be/My2FRPA3Gf8
 *  https://youtube.googleapis.com/v/My2FRPA3Gf8
 *  Supported Vimeo URL formats:
 *  http://vimeo.com/25451551
 *  http://player.vimeo.com/video/25451551
 *  Also supports relative URLs:
 *  player.vimeo.com/video/25451551
 */

export function parseVideo(url) {
  /* eslint-disable no-useless-escape */
  url.match(
    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/,
  );
  /* eslint-disable no-useless-escape */
  let type = '';
  if (RegExp.$3.indexOf('youtu') > -1) {
    type = 'youtube';
  } else if (RegExp.$3.indexOf('vimeo') > -1) {
    type = 'vimeo';
  }
  return {
    type,
    id: RegExp.$6,
  };
}

export function createVideoURL(url) {
  // Returns an iframe of the video with the specified URL.
  const videoObj = parseVideo(url);
  let videoURL = '';
  if (videoObj.type === 'youtube') {
    videoURL = `//www.youtube.com/embed/${videoObj.id}`;
  } else if (videoObj.type === 'vimeo') {
    videoURL = `//player.vimeo.com/video/${videoObj.id}`;
  }
  return videoURL;
}

export function formatSizeUnits(file) {
  let fileSize = file;
  if (fileSize >= 1073741824) {
    fileSize = `${(fileSize / 1073741824).toFixed(2)} GB`;
  } else if (fileSize >= 1048576) {
    fileSize = `${(fileSize / 1048576).toFixed(2)} MB`;
  } else if (fileSize >= 1024) {
    fileSize = `${(fileSize / 1024).toFixed(2)} KB`;
  } else if (fileSize > 1) {
    fileSize = `${fileSize} bytes`;
  } else if (fileSize === 1) {
    fileSize = `${fileSize} byte`;
  } else {
    fileSize = '0 bytes';
  }

  return fileSize;
}

/**
 * add http:// if not exist
 * @author Innovify
 */

export function addHttp(url) {
  let newUrl = url;
  if (url.indexOf('://') === -1) {
    newUrl = `http://${url}`;
  }
  return newUrl;
}
