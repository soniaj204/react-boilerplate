import React from 'react';
import PropTypes from 'prop-types';

import DatepickerStyle from './style';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class Datepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <DatepickerStyle>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </DatepickerStyle>
    );
  }
}

export default Datepicker;
