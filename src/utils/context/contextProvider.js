import { createContext, useContext, useReducer } from 'react'
//1 Create Context
const QuestionsContext = createContext()

//3 Initial state reducer obj

const initialState = {
  //time consideration
  waiting: true,
  loading: false,
  //keep track of statistics
  index: 0,
  correct: 0,

  error: false,
  questions: [
    {
      id: 1,
      question: 'Question 1',
      answer: 'Answer 1',
      wrongAnswers: ['w1', 'w2', 'w3'],
      points: 2,
    },
    {
      id: 2,
      question: 'Question 2',
      answer: 'Answer 2',
      wrongAnswers: ['w1', 'w2', 'w3', 'w4'],
      points: 5,
    },
  ],
}

//4 Create reducer function dispatcher

function questionsReducer(state, action) {
  switch (action.type) {
    case 'ADD_QUESTION':
      const newQuestion = action.payload
      return [...state, newQuestion] //Works

    case 'REMOVE_QUESTION': {
      const questionId = action.payload
      return (state = state.filter((question) => question.id !== questionId)) //Works
    }
    case 'UPDATE_QUESTION': {
      //TODO
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

//2 Define Provider
export const QuestionsProvider = ({ children }) => {
  //3 declare reducer  //5 pass reducers and initial states
  const [state, dispatch] = useReducer(questionsReducer, initialState)
  console.log(state)
  //6 return the wrapper parent Context JSX.
  return (
    <QuestionsContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  )
}

//7 comprimiendo el código aun mas
export const useQuestionsContext = () => useContext(QuestionsContext)
