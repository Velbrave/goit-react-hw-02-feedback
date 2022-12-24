import React from 'react';

const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad }) => {
  return (
    <div className="wrapper">
      <button className="feedbackBtn" type="button" onClick={onHandleGood}>
        Good
      </button>
      <button className="feedbackBtn" type="button" onClick={onHandleNeutral}>
        Neutral
      </button>
      <button className="feedbackBtn" type="button" onClick={onHandleBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
