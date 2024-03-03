import { useQuestionsContext } from "@/utils/context/contextProvider";
import { useEffect, useState } from "react";

//Remove a Question by ID
const questionAddID = 2;

//Edit a Question by ID
const questionEditID = 2;

const testQuestionEditedObj = {
  id: 2,
  question: "NEW EDITED Question",
};

export default function contextTestPage() {
  const { state, dispatch } = useQuestionsContext(); //Context state
  const [inputQuestion, setInputQuestion] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");

  useEffect(() => {
    console.log(state);
  }, [state]);

  //1 FN: Create one question Obj with an Unique ID
  function createQuestionObj() {
    let latestId = getLatestQuestionObjId();
    const newUnikeId = latestId + 1; //generate unique ID
    const testQuestionObj1 = {
      id: newUnikeId,
      question: "new q",
      answer: "new answer",
      wrongAnswer: ["w1", "w2"],
      points: 2,
    };
    return testQuestionObj1;
  }

  //1.2 FN: Get latest question Obj ID
  function getLatestQuestionObjId() {
    const { questions } = state;
    let lastQuestionObj = questions[questions.length - 1];
    const questionId = lastQuestionObj.id;
    return questionId;
  }

  //2 FN:

  /* function getQuestionIndex(id) {
    const { questions } = state;
    // Find the index of the Object with the given ID
    const index = questions.findIndex((obj) => obj.id === id);
    console.log(index);
  } */

  //1 CONTEXT: Read state
  function readQuestionsList() {
    console.log(state);
  }

  //2 CONTEXT: Add a New question Obj, to the Context State
  function handleAddQuestion() {
    const newQuestionObj = createQuestionObj();
    dispatch({
      type: "ADD_QUESTION",
      payload: newQuestionObj, //It works
    });
  }

  //3 CONTEXT: Remove a question Obj by ID, from the Context State
  function handleRemoveQuestionById() {
    dispatch({
      type: "REMOVE_QUESTION",
      payload: questionAddID, //It works
    });
  }

  //4
  function handleEditQuestion() {
    /* const indexEditQuestion = getQuestionIndex(); */
    const id = testQuestionEditedObj.id;
    dispatch({
      type: "EDIT_QUESTION",
      payload: { id, testQuestionEditedObj },
    });
  }

  return (
    <div className="flex flex-col gap-5 text-2xl items-center">
      <h1>CONTEXT C.R.U.D OPERATIONS TESTS (Using the Console)</h1>
      <div className="flex flex-row gap-4">
        <button className=" w-36 bg-slate-400" onClick={readQuestionsList}>
          READ Q
        </button>

        <button className=" w-36 bg-slate-400" onClick={handleAddQuestion}>
          ADD Q
        </button>
        <br />

        <button
          className="w-36 bg-slate-400"
          onClick={handleRemoveQuestionById}
        >
          REMOVE Q
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h1>Edit a Question by ID = {questionEditID}</h1>
        <label>
          question:
          <input
            onChange={(e) => {
              setInputQuestion(e.target.value);
            }}
          ></input>
        </label>
        <label>
          answer:
          <input
            onChange={(e) => {
              setInputAnswer(e.target.value);
            }}
          ></input>
        </label>
        <p>{inputQuestion}</p>
        <button className=" w-36 bg-slate-400" onClick={handleEditQuestion}>
          EDIT Q
        </button>
      </div>
    </div>
  );
}
