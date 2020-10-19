/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const CloseSmall = ({size, ...props}) => (
  <svg viewBox="0 0 16 16" fill="currentColor" width={ size || "16" } height={ size || "16" } {...props}>
    <path d="M4.73813 3.89009C4.50382 3.65578 4.12392 3.65578 3.8896 3.89009C3.65529 4.12441 3.65529 4.50431 3.8896 4.73862L7.15159 8.00061L3.89033 11.2619C3.65601 11.4962 3.65601 11.8761 3.89033 12.1104C4.12464 12.3447 4.50454 12.3447 4.73886 12.1104L8.00012 8.84914L11.2614 12.1104C11.4957 12.3447 11.8756 12.3447 12.1099 12.1104C12.3442 11.8761 12.3442 11.4962 12.1099 11.2619L8.84865 8.00061L12.1106 4.73862C12.3449 4.50431 12.3449 4.12441 12.1106 3.89009C11.8763 3.65578 11.4964 3.65578 11.2621 3.89009L8.00012 7.15208L4.73813 3.89009Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
CloseSmall.displayName = 'CloseSmall';
CloseSmall.propTypes = {
  size: PropTypes.string
}
export default CloseSmall;
/* tslint:enable */
/* eslint-enable */
