import React from 'react'
import Feedbackitem from './Feedbackitem'
//import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function Feedbacklist(/*{feedback  handleDelete} */) { 
    const {feedback} = useContext(FeedbackContext)
    //console.log(feedback)
    if (!feedback || feedback.length === 0) {
        return <p>Empty Feedback </p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
       {feedback.map((item)=> (
        <motion.div
         key={item.id}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
         >
           <Feedbackitem key={item.id} item={item} /* handleDelete={handleDelete} *//>
           </motion.div>
       ))}
       </AnimatePresence>
      </div>
      )

  /* the code before the animation effects
   return (
     <div className='feedback-list'>
    {feedback.map((item)=> (
        <Feedbackitem key={item.id} item={item} handleDelete={handleDelete} />
    ))}
   </div>
   )
  */
  
}

/*
Feedbacklist.prototype = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
} */

export default Feedbacklist