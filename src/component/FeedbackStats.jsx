//import PropTypes from 'prop-types'
import React from "react";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats(/*{ feedback } */) {

    const {feedback} = useContext(FeedbackContext)
  // calculate average rating

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? "0" : average}</h4>
    </div>
  );
}

/*

FeedbackStats.prototype = {
    feedback: PropTypes.array.isRequired,
}
*/
export default FeedbackStats;
