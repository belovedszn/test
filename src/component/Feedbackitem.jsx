//import React from "react";
//import { useState } from "react";

import Card from "./shared/card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function Feedbackitem({ item /* handleDelete */ }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  /* const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a feedback item 1');

 /* const handleClick = () => {
   // setRating(2)
   setRating((prev)=> {
    console.log(prev)
    return prev +1
   })
  } 
  
  <button onClick={handleClick}>Click</button>
  */

  /*  const handleClick = (id)=> {
    console.log(id)
  } */

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => /*handleDelete*/ deleteFeedback(item.id)}
      >
        <FaTimes color="purple"></FaTimes>
      </button>
      <button
        onClick={() => {
          editFeedback(item);
        }}
        className="edit"
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.prototype = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
