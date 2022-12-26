import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import React from 'react';

const Statistics = ({
  isGood,
  isNeutral,
  isBad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.listItem}>
      <li className={css.item}>
        <p className={css.text}>Good: {isGood}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Neutral: {isNeutral}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Bad: {isBad}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Total: {total}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Positive feedback: {positivePercentage}</p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  isGood: PropTypes.number,
  isNeutral: PropTypes.number,
  isBad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
