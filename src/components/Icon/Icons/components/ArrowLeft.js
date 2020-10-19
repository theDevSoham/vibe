/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const ArrowLeft = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M4.07613 8.42417L4.50039 7.9999L4.07613 7.57564C3.84181 7.80995 3.84181 8.18985 4.07613 8.42417ZM5.34892 7.9999L11.9247 14.5756C12.159 14.81 12.159 15.1899 11.9247 15.4242C11.6903 15.6585 11.3104 15.6585 11.0761 15.4242L4.07613 8.42417L4.50039 7.9999L4.07613 7.57564L11.0761 0.575639C11.3104 0.341324 11.6903 0.341324 11.9247 0.575639C12.159 0.809953 12.159 1.18985 11.9247 1.42417L5.34892 7.9999Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
ArrowLeft.displayName = 'ArrowLeft';
ArrowLeft.propTypes = {
  size: PropTypes.string
}
export default ArrowLeft;
/* tslint:enable */
/* eslint-enable */
