import React from "react";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/card";
import Button from "./shared/Button";
import RatingSelect from "./ratingSelect";

function FeedbackForm(/*{handleAdd} */) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(()=> {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 16) {
      setBtnDisabled(true);
      setMessage("Text must be at least 16 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 16) {
      const newFeedback = {
        text,
        rating
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback);
      }

      //handleAdd(newFeedback);
      //addFeedback(newFeedback);
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your service with us</h2>
       <RatingSelect select={(rating)=> {setRating(rating)}}></RatingSelect>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="Write us a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
