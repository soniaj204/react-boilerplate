/**
 * redux-form renderField are created here.
 * this renderField are used ex-cross the system.
 *
 * @author Innovify
 * @Developer Innovify
 */

import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import Input from 'components/Input';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prop-types */
export const renderField = ({
  input,
  label,
  placeholder,
  type,
  readOnly,
  meta: { touched, error, warning, active },
  disabled = false,
}) => {
  const success = touched && !error ? 'success' : '';
  const errors = touched && error && !active ? 'has-error' : success;
  return (
    <FormGroup>
      <Label htmlFor={label}>{label}</Label>
      <div className={`${errors} form-control-validated`}>
        <Input
          {...input}
          className="form-control"
          placeholder={placeholder}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
        />
        <span className="required">{touched && (error || warning)}</span>
      </div>
    </FormGroup>
  );
};
/* eslint-disable react/prop-types */
export const renderFieldWithIcon = ({
  input,
  icon,
  label,
  placeholder,
  type,
  readOnly,
  meta: { touched, error, warning, active },
  disabled = false,
}) => {
  const success = touched && !error ? 'success' : '';
  const errors = touched && error && !active ? 'has-error' : success;
  return (
    <FormGroup>
      <Label htmlFor={label}>{label}</Label>
      <div className={`${errors} form-control-validated input-group`}>
        <div className="input-group-prepend">
          <div className="input-group-text">{icon}</div>
        </div>
        <Input
          {...input}
          className="form-control"
          placeholder={placeholder}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
        />
        <span className="required">{touched && (error || warning)}</span>
      </div>
    </FormGroup>
  );
};

export const renderTextAreaForm = ({
  input,
  label,
  placeholder,
  meta: { touched, error, warning, active },
  rows = 4,
  cols = 30,
}) => {
  const success = touched && !error && !warning ? 'success' : '';
  const errors = touched && error ? 'has-error' : success;
  const warnings = !error && warning && active ? 'has-warning' : success;
  return (
    <FormGroup>
      {label && <Label htmlFor={label}>{label}</Label>}
      <div className={`${errors} ${warnings} form-control-validated`}>
        <textarea
          placeholder={placeholder}
          {...input}
          className="form-control"
          id=""
          cols={cols}
          rows={rows}
        />
        <span className="required">{(touched || active) && error}</span>
        <span className="warning">{active && !error && warning}</span>
      </div>
    </FormGroup>
  );
};

export const renderFieldPassword = ({
  input,
  label,
  placeholder,
  showPassword,
  type,
  eye,
  meta: { touched, error, warning, active },
  tooltip = false,
}) => {
  const success = touched && !error ? 'success' : '';
  const errors = touched && error && !active ? 'has-error' : success;
  const classNames = `fa ${type === 'password' ? 'fa-eye' : 'fa-eye-slash'}`;
  return tooltip ? (
    <div className={`${errors} form-control-validated`}>
      <Input
        {...input}
        className="form-control"
        placeholder={placeholder}
        type={type}
      />
      {eye && (
        <button type="button" className="show-password" onClick={showPassword}>
          <i className={classNames} />
        </button>
      )}
      <span className="required">{touched && (error || warning)}</span>
    </div>
  ) : (
    <FormGroup>
      <Label htmlFor={label}>{label}</Label>
      <div className={`${errors} form-control-validated`}>
        <Input
          {...input}
          className="form-control"
          placeholder={placeholder}
          type={type}
        />
        {eye && (
          <button
            type="button"
            className="show-password"
            onClick={showPassword}
          >
            <i className={classNames} />
          </button>
        )}
        <span className="required">{touched && (error || warning)}</span>
      </div>
    </FormGroup>
  );
};

export const renderFieldCheckbox = ({
  input,
  type,
  meta: { touched, error, warning },
}) => {
  const errors = touched && error ? 'has-error' : '';
  return (
    <FormGroup check className="form-group">
      <div className={`${errors} form-control-validated`}>
        <Input {...input} type={type} className="form-check-input" />
        <Label check>
          <FormattedMessage {...messages.labelTNC} />{' '}
          <a
            href="https://www.teaglo.com/legal/terms"
            target="_blank"
            className="btn-link"
          >
            <FormattedMessage {...messages.labelWebsiteTerms} />
          </a>{' '}
          <FormattedMessage {...messages.labelAnd} />{' '}
          <a
            className="btn-link"
            href="https://www.teaglo.com/legal/privacy"
            target="_blank"
          >
            <FormattedMessage {...messages.labelPrivacyPolicy} />
          </a>
        </Label>
        <span className="required">{touched && (error || warning)}</span>
      </div>
    </FormGroup>
  );
};

export const renderFieldoptCheckbox = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => {
  const errors = touched && error ? 'has-error' : '';
  return (
    <FormGroup check className="form-group">
      <div className={`${errors} form-control-validated`}>
        <Input {...input} type={type} className="form-check-input" />
        <Label check> {label} </Label>
      </div>
    </FormGroup>
  );
};

export const renderDynamicField = ({
  input,
  type,
  meta: { touched, error, warning, active },
}) => {
  const success = touched && !error ? 'success' : '';
  const errors = touched && error && !active ? 'has-error' : success;
  return (
    <div className={`${errors} form-control-validated`}>
      <input {...input} type={type} className="form-control" />
      <span className="required  cond-error">
        {touched && (error || warning)}
      </span>
    </div>
  );
};

export const renderSelectField = ({
  input,
  label,
  defaultValue,
  className,
  meta: { touched, error, warning },
  children,
}) => {
  const errors = touched && error ? 'has-error' : '';
  return (
    <FormGroup className="form-group">
      {label && <Label htmlFor={label}>{label}</Label>}
      <div className={`${errors} form-control-validated`}>
        <select
          value={defaultValue}
          className={`form-control ${className}`}
          onChange={event => input.onChange(event)}
        >
          {children}
        </select>
        {errors && (
          <span className="required">{touched && (error || warning)}</span>
        )}
      </div>
    </FormGroup>
  );
};
/* eslint-disable react/prop-types */
