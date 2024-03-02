import { useQuestionsContext } from "@/utils/context/contextProvider";
import { useEffect } from "react";

//Remove a Question by ID
const questionID = 2;

export default function contextTestPage() {
  const { state, dispatch } = useQuestionsContext(); //Context state

  useEffect(() => {
    console.log(state);
  }, [state]);

  //1
  function createQuestionObj() {
    let latestId = getLatestQuestionObjId();
    const newUnikeId = latestId + 1;
    const testObj = {
      id: newUnikeId,
      question: "new q",
      answer: "new answer",
      wrongAnswer: ["w1", "w2"],
      points: 2,
    };
    return testObj;
  }

  //2
  function getLatestQuestionObjId() {
    const { questions } = state;
    let lastQuestionObj = questions[questions.length - 1];
    const questionId = lastQuestionObj.id;
    return questionId;
  }

  //3
  function handleAddQuestion() {
    const newQuestionObj = createQuestionObj();
    dispatch({
      type: "ADD_QUESTION",
      payload: newQuestionObj, //It works
    });
  }

  // Works
  function handleRemoveQuestionById() {
    dispatch({
      type: "REMOVE_QUESTION",
      payload: questionID, //It works
    });
  }

  return (
    <div className="flex flex-row gap-4">
      <h1>Context TEST (console.log)</h1>
      <button className="bg-slate-400" onClick={handleAddQuestion}>
        Add Q
      </button>
      <br />
      <button className="bg-slate-400" onClick={handleRemoveQuestionById}>
        Remove Q
      </button>
    </div>
  );
}
