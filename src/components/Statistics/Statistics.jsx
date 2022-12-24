import React from 'react';

const Statistics = ({ isGood, isNeutral, isBad, total, positive }) => {
  return (
    <ul>
      <li>
        <p>Good:{isGood}</p>
      </li>
      <li>
        <p>Neutral:{isNeutral}</p>
      </li>
      <li>
        <p>Bad:{isBad}</p>
      </li>
      <li>
        <p>Total:{total}</p>
      </li>
      <li>
        <p>Positive feedback:{positive}</p>
      </li>
    </ul>
  );
};

export default Statistics;
