import { createContext, useContext, useReducer } from "react";
//1 Create Context
const QuestionsContext = createContext();

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
      question: "Which is the highest mountain of the world?",
      answer: "Mount Everest",
      wrongAnswers: ["K2", "Kangchenjunga", "Makalu", "Annapurna"],
      points: 2,
    },
    {
      id: 2,
      question: "Which state of Sweden is located the - LM-tornet?",
      answer: "Stockholm",
      wrongAnswers: ["Linköping", "Södermanland", "Malmö", "Gothenburg"],
      points: 4,
    },
    {
      id: 3,
      question: "What is the total surface(square kilometres) of Sweden?",
      answer: "450,295",
      wrongAnswers: ["324,200", "550,029", "602,789", "476,435"],
      points: 5,
    },
    {
      id: 4,
      question: "q4",
      answer: "a4",
      wrongAnswers: ["w1", "w2", "w3", "w4"],
      points: 5,
    },
  ],
};

//4 Create reducer function dispatcher
export const ActionTypes = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  IS_THIS_CORRECT: "IS_THIS_CORRECT",
  NEXT_QUESTION_PLEASE: "NEXT_QUESTION_PLEASE",
};

export const openModal = () => ({ type: ActionTypes.OPEN_MODAL });
export const closeModal = () => ({ type: ActionTypes.CLOSE_MODAL });
export const isThisCorrect = () => ({ type: ActionTypes.IS_THIS_CORRECT });
export const nextQuestionPlease = () => ({
  type: ActionTypes.NEXT_QUESTION_PLEASE,
});
function questionsReducer(state, action) {
  switch (action.type) {
    case "ADD_QUESTION":
      const newQuestion = action.payload;
      return { ...state, questions: [...state.questions, newQuestion] };

    case "REMOVE_QUESTION": {
      const questionId = action.payload;
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== questionId
        ),
      };
    }
    case "EDIT_QUESTION": {
      //TODO
      /* const questionId = action.payload; */
      const { id } = action.payload;
      const editedQuestion = action.payload;

      console.log(id);
      console.log(editedQuestion);
      /* return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== questionId
        ),
      }; */
    }

    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };

    case "CLOSE_MODAL": {
      return { ...state, waiting: true, correct: 0, isModalOpen: false };
    }

    case "IS_THIS_CORRECT": {
      return { ...state, correct: state.correct + 1 };
    }
    //always within the length of the question array. otherwise please go to the next one
    case "NEXT_QUESTION_PLEASE": {
      const newIndex = state.index + 1;
      if (newIndex > state.questions.length - 1) {
        return { ...state, isModalOpen: true, index: 0 };
      } else {
        return { ...state, index: newIndex };
      }
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

//2 Define Provider
export const QuestionsProvider = ({ children }) => {
  //3 declare reducer  //5 pass reducers and initial states
  const [state, dispatch] = useReducer(questionsReducer, initialState);
  console.log(state);
  //6 return the wrapper parent Context JSX.
  return (
    <QuestionsContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  );
};

//7 comprimiendo el código aun mas
export const useQuestionsContext = () => useContext(QuestionsContext);
