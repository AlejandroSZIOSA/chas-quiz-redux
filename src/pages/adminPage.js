import React, { useState } from "react";

const AdminPage = () => {
  const [question, setQuestion] = useState({});
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [points, setPoints] = useState("");

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  //options = 3 wrong answers and 1 correct answer

  const addQuestion = () => {
    const newQuestionObject = {
      question: newQuestion,
      options: options.filter((opt) => opt.trim() !== ""),
      correctAnswer: correctAnswer.trim(),
      points: parseInt(points, 10) || 0,
    };

    setQuestion(newQuestionObject);
    // Reset form fields
    setNewQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
    setPoints("");
  };

  const saveData = () => {
    //Här skickas frågorna till backenden

    console.log("Saved data:", question);
  };

  return (
    <div className="max-w-screen-md mx-auto p-8">
      <h1 className="text-3xl mb-6">Admin Page</h1>
      <div className="mb-4">
        <label className="block mb-2">
          Question:
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        {options.map((option, index) => (
          <label key={index} className="block mb-2">
            Option {index + 1}:
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="border p-2 w-full"
            />
          </label>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Correct Answer:
          <input
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Points:
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            className="border p-2 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <button
          onClick={addQuestion}
          className="bg-green-500 text-white px-4 py-2"
        >
          Add Question
        </button>
      </div>
      <div className="mb-4">
        <button onClick={saveData} className="bg-blue-500 text-white px-4 py-2">
          Save Data
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
