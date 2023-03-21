import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='container' data-testid='questions-container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map(question => {
            return <SingleQuestion key={question.id} {...question} data-testid='question' />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
