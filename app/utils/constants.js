/**
 * this is constant file for utils class.
 * @author Innovify
 * @Developer Innovify
 */

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const VALIDATION = {
  EMAIL: 'Please enter a valid email address',
  PHONE: 'Please enter a valid phone number',
  EMAILEXIST: 'email already exist',
  REQUIRED: "Oops, this can't be left empty!",
  WHITESPACE: 'only white space not allowed',
  MIN_LENGTH: 'Must be at least ',
  MAX_LENGTH: 'Must be no more than ',
  MAX_COMMENT: 'You have exceeded the maximum character limit',
  INTEGER: 'Must be a number',
  ONEOF: 'Must be one of:',
  MATCH: 'Passwords do not match',
  RANG: 'Please enter valid ',
  PASSWORD:
    'At least 8 characters long, 1 Upper Case, 1 Lower Case, 1 number & 1 special character',
  CHECKED: 'Please consent Terms and Conditions and Privacy Policy',
  NOT_EMAIL: `"You can't use email as username"`,
  NOT_ALLOWED: 'accept all characters except "<" ">" "/" "\\" "?"',
  NOT_ALLOWED_COMMENT: 'accept all characters except "<" ">" "/" "\\"',
  ALLOWED: 'accept characters are ',
  RESOLUTION: 'Width and Height must be greater than or equal to ',
  FILESIZE: 'File size must be less than ',
  REUPLOAD: 'Please Reupload file.',
  FILETYPE: 'Please select correct file, only supports ',
  NO_RECORD: 'No results found',
  NO_NOTES: 'No notes found for the applicant.',
  NO_FEED: 'No Posts available',
  NO_RECORD_INVITATION: 'No pending invitations',
  NO_RECORD_MYCONNECTION:
    'You don’t have any connections yet. Click on Add connections to connect with people on Teaglo.',
  DUPLICATE_RECORD: 'Duplicate record found',
  GREATER_THEN: 'To Year must be greater than From Year ',
  GREATER_THEN_AGE: 'Max Age must be greater than min Age ',
  GREATER_THEN_DATE: 'Your end date can’t be earlier than your start date ',
  WARNING_LENGTH: 'you reached',
  URL:
    'Invalid URL. Please enter valid URL (e.g http://google.com/ or google.com or https://google.com/)',
  DELETED_POST: 'Post is deleted.',
  NO_UNREAD_NOTIFICATION: 'You do not have any unread notifications.',
  NO_READ_NOTIFICATION: 'You do not have any read notifications.',
};

export const FILE_SIZE = 3145728;
export const DOC_FILE_SIZE = 2097152;
export const VIDEO_FILE_SIZE = 20971520;
