import styled from 'styled-components';

import { primaryStyle } from 'styles/settings/color';

const DatepickerStyle = styled.div`
  .react-datepicker-wrapper {
    input {
      border: 1px solid grey;
      border-radius: 2px;
      padding: 0 10px;
    }
  }

  .react-datepicker-popper {
    .react-datepicker__header {
      background: ${primaryStyle};
    }

    .react-datepicker__navigation--previous {
      border-right-color: rgba(255, 255, 255, 0.8);
    }

    .react-datepicker__navigation--next {
      border-left-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export default DatepickerStyle;
