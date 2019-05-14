/* eslint-disable arrow-body-style,no-param-reassign,radix,no-useless-escape */
import { VALIDATION } from './constants';
const isEmpty = value => value === undefined || value === null || value === '';
const join = rules => (value, data, props) =>
  rules
    .map(rule => rule(value, data, props))
    .filter(error => !!error)[0]; /* first error */

/**
 * Email validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */

export function email(value) {
  if (
    !isEmpty(value) &&
    !/^[A-Za-z0-9](\.?[A-Za-z0-9_-]){0,}@[A-Za-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i.test(
      value,
    )
  ) {
    return VALIDATION.EMAIL;
  }
  return '';
}

/**
 * isUrl validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */

export function isUrl(value) {
  const regexp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
  if (!isEmpty(value) && !regexp.test(value)) {
    return VALIDATION.URL;
  }
  return false;
}

/**
 * required validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */

export function required(value) {
  if (isEmpty(value)) {
    return VALIDATION.REQUIRED;
  } else if (isEmpty(value.trim())) {
    return VALIDATION.REQUIRED;
  }
  return '';
}
/**
 * required validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */
export function contactNum(value) {
  if (
    !isEmpty(value) &&
    !/^(\+)?((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])?|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){10,14}/i.test(
      value,
    )
  ) {
    return VALIDATION.PHONE;
  }
  return '';
}

/**
 * requiredValue validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */

export function requiredValue(value) {
  if (isEmpty(value) || !value) {
    return VALIDATION.REQUIRED;
  }
  return '';
}
/**
 * requiredJson json validation
 *
 * @param (value) value is a json object
 * @author Innovify
 * @Developer Innovify
 */
export function requiredJson(value) {
  if (isEmpty(value)) {
    return VALIDATION.REQUIRED;
  } else if (!value.value || isEmpty(value.value.trim())) {
    return VALIDATION.REQUIRED;
  }
  return '';
}

/**
 * required json validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */

export function requiredDate(value) {
  if (isEmpty(value)) {
    return VALIDATION.REQUIRED;
  }
  return '';
}

/**
 * checked validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */

export function checked(value) {
  if (!value) {
    return VALIDATION.CHECKED;
  } else if (isEmpty(value)) {
    return VALIDATION.CHECKED;
  }
  return '';
}

/**
 * notEmail validation
 *
 * @param(value)
 * @author Innovify
 * @Developer Innovify
 */

export function notEmail(value) {
  if (
    !isEmpty(value) &&
    /^[A-Za-z0-9](\.?[A-Za-z0-9_-]){0,}@[A-Za-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i.test(
      value,
    )
  ) {
    return VALIDATION.NOT_EMAIL;
  }
  return '';
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `${VALIDATION.MIN_LENGTH} ${min} characters`;
    }
    return '';
  };
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `${VALIDATION.MAX_LENGTH} ${max} characters`;
    }
    return '';
  };
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) {
    return VALIDATION.INTEGER;
  }
  return '';
}

/**
 * grater then validation
 * @param(field) Field are used for print name.
 * @author Innovify
 * @Developer Innovify
 */

export function salary(value) {
  if (value && Number.isInteger(Number(value)) && value < 10000) {
    return `${VALIDATION.MIN_LENGTH} 10000`;
  }
  if (value && Number.isInteger(Number(value)) && value >= 1000000000) {
    return `${VALIDATION.MAX_LENGTH} 1000000000`;
  }
  if (value && !Number.isInteger(Number(value))) {
    return VALIDATION.INTEGER;
  }
  return '';
}
/**
 * grater then validation
 *
 * @param(field) Field are used for print name.
 * @author Innovify
 * @Developer Innovify
 */

export function graterThen(field) {
  return (value, data) => {
    if (data) {
      if (value < data.get(field)) {
        return VALIDATION.GREATER_THEN;
      }
    }
    return '';
  };
}

/**
 * grater then validation
 *
 * @param(field) Field are used for print name.
 * @author Innovify
 * @Developer Innovify
 */

export function graterThenAge(field) {
  return (value, data) => {
    if (data) {
      if (parseInt(value) <= parseInt(data.get(field))) {
        return VALIDATION.GREATER_THEN_AGE;
      }
    }
    return '';
  };
}

/**
 * grater then Date validation
 *
 * @param(field) Field are used for print name.
 * @author Innovify
 * @Developer Innovify
 */

export function graterThenDate(field) {
  return (value, data) => {
    if (data) {
      const splitDate =
        data.get(field) && typeof data.get(field) === 'string'
          ? data.get(field).split('/')
          : [];
      const date = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);
      const splitToDate =
        value && typeof value === 'string' ? value.split('/') : [];
      const currentDate = splitToDate.length
        ? new Date(splitToDate[2], splitToDate[1] - 1, splitToDate[0])
        : value;
      if (
        splitDate &&
        new Date(currentDate).getTime() < new Date(date).getTime()
      ) {
        return VALIDATION.GREATER_THEN;
      }
    }
    return '';
  };
}

/* export function oneOf(enumeration) {
  return (value) => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
    return '';
  };
} */

/**
 * match two value validation
 *
 * @param(field) field is another field for match value.
 * @author Innovify
 * @Developer Innovify
 */

export function match(field) {
  return (value, data) => {
    if (data) {
      if (value !== data.get(field)) {
        return VALIDATION.MATCH;
      }
    }
    return '';
  };
}

/**
 * range validation
 *
 * @param(min) minimum value pass.
 * @param(max) maximum value pass.
 * @param(field) Field are used for print name.
 * @author Innovify
 * @Developer Innovify
 */

export function rangLength(min, max, field) {
  return value => {
    if (!isEmpty(value) && (value.length < min || value.length > max)) {
      return `${VALIDATION.RANG + field} (min ${min} char, max ${max} char)`;
      // return `Must be no more than ${max} characters`;
    }
    return '';
  };
}

/**
 * range alert validation
 *
 * @param(min) minimum value pass.
 * @param(max) maximum value pass.
 * @author Innovify
 * @Developer Innovify
 */

export function rangAlertLength(min, max) {
  return value => {
    if (!isEmpty(value) && (value.length < min || value.length > max)) {
      return `${VALIDATION.WARNING_LENGTH} ${max} characters`;
      // return `Must be no more than ${max} characters`;
    }
    return '';
  };
}

/**
 * notAllow characters validation
 *
 * @param(rex) Regular Expression value pass.
 * @author Innovify
 * @Developer Innovify
 */

export function notAllow(rex) {
  return value => {
    // /^[-_ a-zA-Z0-9]+$/i
    const regularRex = new RegExp(`[${rex}]+$`, 'gi');
    if (!isEmpty(value) && !regularRex.test(value)) {
      return VALIDATION.NOT_ALLOWED;
    }
    return '';
  };
}

/**
 * Allow characters validation
 *
 * @param(rex) Regular expression value pass.
 * @author Innovify
 * @Developer Innovify
 */

export function allow(rex) {
  return value => {
    // /^[-_ a-zA-Z0-9]+$/i
    const regularRex = new RegExp(`[${rex}]+$`, 'gi');
    if (!isEmpty(value) && !regularRex.test(value)) {
      return `${VALIDATION.ALLOWED} ${rex}`;
    }
    return '';
  };
}

/**
 * password validation
 *
 * @param(value).
 * @author Innovify
 * @Developer Innovify
 */

export function password(value) {
  if (
    !isEmpty(value) &&
    !/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\^£$%&*()}{@#~?><>,|=_+!-]).{8,}$/.test(
      value,
    )
  ) {
    return VALIDATION.PASSWORD;
    // return `Must be no more than ${max} characters`;
  }
  return '';
}

/**
 * range validation for password only
 *
 * @param(min) minimum value pass.
 * @param(max) maximum value pass.
 * @author Innovify
 * @Developer Innovify
 */

export function passwordRangLength(min, max) {
  return value => {
    if (!isEmpty(value) && (value.length < min || value.length > max)) {
      return VALIDATION.PASSWORD;
    }
    return '';
  };
}

export function customValidation(data, errors) {
  if (data.get('position')) {
    if (
      data.get('position').type === 'teacher' ||
      data.get('position').type === 'leadership'
    ) {
      const value = data.get('phase');
      if (!value || isEmpty(value.value)) {
        errors.phase = VALIDATION.REQUIRED;
      }
    }
    if (data.get('position').type === 'teacher') {
      const value = data.get('subject');
      if (!value || isEmpty(value.value)) {
        errors.subject = VALIDATION.REQUIRED;
      }
    }
  }
  if (data.get('fromDate')) {
    const value = data.get('toDate');
    if (!value || isEmpty(value)) {
      errors.toDate = VALIDATION.REQUIRED;
    }
  }
  if (data.get('toDate')) {
    const value = data.get('fromDate');
    if (!value || isEmpty(value)) {
      errors.fromDate = VALIDATION.REQUIRED;
    }
  }
  if (
    data.get('fromMonth') &&
    data.get('fromYear') &&
    data.get('toMonth') &&
    data.get('toYear')
  ) {
    const fromdate = new Date(
      Date.UTC(data.get('fromYear'), data.get('fromMonth'), 1, 0, 0, 0, 0),
    ).getTime();
    const todate = new Date(
      Date.UTC(data.get('toYear'), data.get('toMonth'), 1, 0, 0, 0, 0),
    ).getTime();
    if (todate < fromdate) {
      errors.toYear = VALIDATION.GREATER_THEN_DATE;
    }
  }
  if (data.get('fromMonth')) {
    const value = data.get('fromYear');
    if (!value || isEmpty(value)) {
      errors.fromYear = VALIDATION.REQUIRED;
    }
  }
  if (data.get('fromYear')) {
    const value = data.get('fromMonth');
    if (!value || isEmpty(value)) {
      errors.fromMonth = VALIDATION.REQUIRED;
    }
  }
  if (data.get('toMonth')) {
    const value = data.get('toYear');
    if (!value || isEmpty(value)) {
      errors.toYear = VALIDATION.REQUIRED;
    }
  }
  if (data.get('toYear')) {
    const value = data.get('toMonth');
    if (!value || isEmpty(value)) {
      errors.toMonth = VALIDATION.REQUIRED;
    }
  }
  return errors;
}

/**
 * rules
 *
 * @param(rules).
 * @author Innovify
 * @Developer Innovify
 */

export function createValidator(rules) {
  return (data = {}, props) => {
    let errors = {};
    Object.keys(rules).forEach(key => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data.get(key), data, props);
      if (error) {
        errors[key] = error;
      }
    });
    errors = customValidation(data, errors);
    return errors;
  };
}

/* eslint-disable arrow-body-style */
