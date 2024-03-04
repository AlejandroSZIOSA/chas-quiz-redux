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
  isModalOpen: false,
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
// Define action type
export const CHECK_ANSWER = "CHECK_ANSWER";

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

    //DONE
    case "EDIT_QUESTION": {
      const editedQuestionObj = action.payload;
      const id = editedQuestionObj.id;

      return {
        ...state,
        questions: state.questions.map((q) => {
          if (q.id === id) {
            q = editedQuestionObj;
            return q;
          }
          return q;
        }),
      };
    }

    case "OPEN_MODAL":
      return { ...state, isModalOpen: true, index: 0 };

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
        return { ...state, isModalOpen: true };
      } else {
        return { ...state, index: newIndex };
      }
    }
    case CHECK_ANSWER: {
      const { payload } = action;
      if (payload) {
        return {
          ...state,
          correct: state.correct + 1, // Increment correct count
        };
      }
      // Handle next question logic here if needed
      return state; // Return current state if answer is not correct
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

  // Define action creator
  const checkAnswer = (value) => {
    dispatch({
      type: CHECK_ANSWER,
      payload: value,
    });

    if (value && state.index >= state.questions.length - 1) {
      // If the current index is the last question or beyond, open the modal
      dispatch({
        type: ActionTypes.OPEN_MODAL,
      });
    }
    // Check if there's a payload and if it's the last question
    if (value == true) {
      dispatch({
        type: "NEXT_QUESTION_PLEASE",
      });
    }
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  //6 return the wrapper parent Context JSX.
  return (
    <QuestionsContext.Provider
      value={{ state, dispatch, checkAnswer, closeModal }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

//7 comprimiendo el código aun mas
export const useQuestionsContext = () => useContext(QuestionsContext);
