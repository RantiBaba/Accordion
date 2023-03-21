import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  //* This code basically means that if the activeId is equal to the id of the question that we are currently iterating over,
  //* then we want to set isActive to true.
  //* If it is not equal, then we want to set isActive to false.
  //* Note that the initial state set for 'activeId' is null, so if the activeId is null,
  //* then isActive will be false initially.

  return (
    <article className='question' data-testid={`article-${id}`}>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)} data-testid={`btn-${id}`}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
      {/* //* this is a conditional rendering. If isActive is true, then we want to render the paragraph tag. */}
    </article>
  )
}
export default SingleQuestion
