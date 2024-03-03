import { useQuestionsContext } from "@/utils/context/contextProvider";

//Remove a Question by ID
const questionRemoveID = 3;

//a new edited Object Question
const questionEditedObj = {
  id: 4,
  question: "EDITED Question",
};

export default function contextTestPage() {
  const { state, dispatch } = useQuestionsContext(); //Context state

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
      payload: questionRemoveID, //It works
    });
  }

  //4 CONTEXT :Update the state
  function handleEditQuestion() {
    dispatch({
      type: "EDIT_QUESTION",
      payload: questionEditedObj, //It works
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
        <h1>Edit a Question by ID = {questionEditedObj.id}</h1>
        <button className=" w-36 bg-slate-400" onClick={handleEditQuestion}>
          EDIT Q
        </button>
      </div>
    </div>
  );
}
