import { useQuestionsContext } from "@/utils/context/contextProvider";
import { useEffect } from "react";

//Remove a Question by ID
const questionID = 4;

export default function contextTestPage() {
  const { state, dispatch } = useQuestionsContext();

  useEffect(() => {
    console.log(state);
  }, [state]);

  //1 Works
  function getLatestQuestionObjId() {
    const { questions } = state;
    let lastQuestionObj = questions[questions.length - 1];
    const questionId = lastQuestionObj.id;
    return questionId;
  }

  //2 Works
  function createQuestionObj() {
    let latestId = getLatestQuestionObjId();
    const newUnikeId = latestId + 1;
    /* console.log(newId); */
    const testObj = {
      id: newUnikeId,
      question: "new q",
      answer: "new answer",
      wrongAnswer: ["w1", "w2"],
      points: 2,
    };
    return testObj;
  }

  //3 Works
  function handleAddQuestion() {
    const newQuestionObj = createQuestionObj();
    dispatch({
      type: "ADD_QUESTION",
      payload: newQuestionObj, //It works
    });
  }

  // Works
  function handleRemoveQuestion() {
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
      <button className="bg-slate-400" onClick={handleRemoveQuestion}>
        Remove Q
      </button>
    </div>
  );
}
