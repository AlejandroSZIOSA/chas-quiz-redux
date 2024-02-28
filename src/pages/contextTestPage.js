import { useQuestionsContext } from "@/utils/context/contextProvider";
import { useEffect } from "react";

//Add a Question
const testObj = {
  id: 3,
  question: "new q",
  answer: "new answer",
  wrongAnswer: ["w1", "w2"],
  points: 2,
};

//Remove a Question by ID
const questionID = 1;

export default function contextTestPage() {
  const { state, dispatch } = useQuestionsContext();

  useEffect(() => {
    console.log(state);
  }, [state]);

  function handleAddQuestion() {
    dispatch({
      type: "ADD_QUESTION",
      payload: testObj, //It works
    });
  }

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
