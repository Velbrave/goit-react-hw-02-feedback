import PropTypes from 'prop-types';
import css from './Notification.module.css';
import React from 'react';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={css.error}>{message}</p>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
