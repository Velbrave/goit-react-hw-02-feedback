import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.wrapper}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.feedbackBtn}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
