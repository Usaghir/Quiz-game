import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext';

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (


    
    <div>Quiz</div>
  )
}

export default Quiz