import { useState } from 'react'
import data from './data'
import Question from './Question'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = id => {
    //* The newActiveId variable is set to null if the id of the question that we are currently iterating over is equal to the activeId.
    //* If the id of the question that we are currently iterating over is not equal to the activeId,
    //* then we want to set the newActiveId to the id of the question that we are currently iterating over.
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <main>
        <Question questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />
      </main>
    </main>
  )
}

export default App
