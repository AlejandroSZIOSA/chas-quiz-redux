import { useQuestionsContext } from "@/utils/context/contextProvider";
import { useEffect } from "react";

//Remove a Question by ID
const questionID = 2;

export default function contextTestPage() {
  const { state, dispatch } = useQuestionsContext(); //Context state

  useEffect(() => {
    console.log(state);
  }, [state]);

  //1 FN: Create one question Obj with an Unique ID
  function createQuestionObj() {
    let latestId = getLatestQuestionObjId();
    const newUnikeId = latestId + 1; //generate unique ID
    const testObj = {
      id: newUnikeId,
      question: "new q",
      answer: "new answer",
      wrongAnswer: ["w1", "w2"],
      points: 2,
    };
    return testObj;
  }

  //1.2 FN: Get latest question Obj ID
  function getLatestQuestionObjId() {
    const { questions } = state;
    let lastQuestionObj = questions[questions.length - 1];
    const questionId = lastQuestionObj.id;
    return questionId;
  }

  //3 CONTEXT: Add a New Question to the Context State
  function handleAddQuestion() {
    const newQuestionObj = createQuestionObj();
    dispatch({
      type: "ADD_QUESTION",
      payload: newQuestionObj, //It works
    });
  }

  //4 CONTEXT: Remove a Selected question by ID
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
