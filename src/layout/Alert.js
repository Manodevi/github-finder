import React, { Component } from 'react';

const Alert = ({alert}) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
};

export default Alert;