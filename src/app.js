//import PropTypes from 'prop-types'

import Header from "./component/Header";
//import { v4 as uuidv4 } from "uuid";
//import Feedbackitem from "./component/Feedbackitem";
import Feedbacklist from "./component/Feedbacklist";
//import { useState } from "react";
//import Feedbackdata from "./data/Feedbackdata";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./component/AboutIconLink";
import FeedbackContext, { FeedbackProvider } from "./context/FeedbackContext";
//import Post from "./component/Post";
//import Card from "./component/shared/card";

//console.log(Feedbackdata)

function App() {
  /*const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const [feedback, setFeedback] = useState(Feedbackdata);

  const deleteFeedback = (id) => {
    //console.log('app', id)
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };*/
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm /* handleAdd={addFeedback} *//>
                  <FeedbackStats /*feedback={feedback}*/ />
                  <Feedbacklist
                   /* feedback={feedback} 
                   /* handleDelete={deleteFeedback}*/
                  />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;

/* testing 
<Card>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Card>

     // <Route path="/post/*" element={<Post />} />

/* tutor code for the routing function
return (
    <Router>
      <Header />
      <div className="container">
        <Route path="/">
          <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
          <FeedbackStats feedback={feedback}></FeedbackStats>
          <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} />
        </Route>

        <Routes>
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </div>
    </Router>
  );

/*
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0, 0, 0, 0.4)",
    textColor: "#ff6a95"
}

Header.prototype = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default App




/* function App() {
  const body = "SuperNaija";
  const title = "Hello World";
  const comments = [
    { id: 1, text: "comment one" },
    { id: 2, text: "comment two" },
    { id: 3, text: "comment three" },
    { id: 4, text: "comment four" },
  ];

  const loading = false;

  const showComment = true;

  if (loading) return <h1>Loading...</h1>;

  // place comment box in a variable
  const commentBox = (<div className="comments">
    <h3>Comments ({comments.length})</h3>
    <ul>
        {comments.map((comment ,index)=> (
            <li key={index}>{comment.text}</li>
        ))
        }
    </ul>
  </div> )

  return (
    <div className="">
      <h1>{body.toUpperCase()}</h1>
      <p>{title}</p>
      <p>{Math.random() * 5 + 5}</p>

      {showComment && commentBox}
    </div>
  );
}

export default App;

/*
function App() {

    const body = "SuperNaija"
    const title = "Hello World"
  return (
    <div className="">
      <h1>Hello Component</h1>
      <p>My App</p>
    </div>
  )
}
*/

/*
import React from "react";

function App() {
  return React.createElement("div", {
    className: "container",
  }, React.createElement("h1", {}, 'My App'));
}

export default App */
