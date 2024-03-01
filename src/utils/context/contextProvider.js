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
export const ActionTypes = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  IS_THIS_CORRECT: 'IS_THIS_CORRECT',
  NEXT_QUESTION_PLEASE: 'NEXT_QUESTION_PLEASE',
}

export const openModal = () => ({ type: ActionTypes.OPEN_MODAL })
export const closeModal = () => ({ type: ActionTypes.CLOSE_MODAL })
export const isThisCorrect = () => ({ type: ActionTypes.IS_THIS_CORRECT })
export const nextQuestionPlease = () => ({
  type: ActionTypes.NEXT_QUESTION_PLEASE,
})
function questionsReducer(state, action) {
  switch (action.type) {
    case 'ADD_QUESTION':
      const newQuestion = action.payload
      return { ...state, questions: [...state.questions, newQuestion] }

    case 'REMOVE_QUESTION': {
      const questionId = action.payload
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== questionId
        ),
      }
    }
    case 'UPDATE_QUESTION': {
      //TODO
    }

    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true }

    case 'CLOSE_MODAL': {
      return { ...state, waiting: true, correct: 0, isModalOpen: false }
    }

    case 'IS_THIS_CORRECT': {
      return { ...state, correct: state.correct + 1 }
    }
    //always within the length of the question array. otherwise please go to the next one
    case 'NEXT_QUESTION_PLEASE': {
      const newIndex = state.index + 1
      if (newIndex > state.questions.length - 1) {
        return { ...state, isModalOpen: true, index: 0 }
      } else {
        return { ...state, index: newIndex }
      }
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
