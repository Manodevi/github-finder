import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => <Fragment>
    <img src={spinner} alt="Loading..." style={spinnerStyle} />
  </Fragment>;

const spinnerStyle = {
  display: "block",
  margin: "auto",
  width: "200px"
};


export default Spinner;