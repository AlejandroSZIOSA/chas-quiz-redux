/* import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] }); */
import { useQuestionsContext } from "@/utils/context/contextProvider";
//import Falskt from"./trueOrFalseComp/falskt"
import { useState, useEffect } from "react";
import Next from "./nextAndPrivious/next";

export default function Home() {
  const { state, checkAnswer, closeModal } = useQuestionsContext();

  const { questions, isModalOpen, index } = state;
  const { question, wrongAnswers, answer } = questions[index];
  let answers = [...wrongAnswers];
  const tempIndex = Math.floor(Math.random() * 5);
  if (tempIndex === 3) {
    answers.push(answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = answer;
  }

  console.log(answers);

  return (
    <main className=" grid h-[771px] justify-around   bg-slate-700 ">
      {isModalOpen && (
        <div className="modal-container isOpen">
          <div className="grid ">
            {/* Modal content goes here */}
            <p className="bg-white rounded-2xl m-4 w-fit grid justify-self-center p-4">Want to see the score? I bet you do!</p>
            <button className="close-btn justify-self-center p-6 hover:bg-green-400 rounded-full" onClick={closeModal}>
              Play again
            </button>
          </div>
        </div>
      )}

      <div className="bg-slate-100 grid ">
        <Next />
      </div>
      <div className="bg-slate-300 grid pt-4">
        <div className=" grid  max-w-xl m-6 ">
          <h4 className="bg-slate-400  items-center  grid p-4 rounded-3xl text-center">
            {question}
          </h4>
        </div>
        <div className=" grid  bg-slate-200  grid-rows-2 justify-self-center gap-10 p-16 rounded-t-3xl  items-center  grid-cols-2">
          {answers.map((question) => {
            return (
              <button
                className="bg-slate-400 justify-self-center grid p-8 rounded-3xl  min-w-40 font-bold items-center"
                onClick={() => checkAnswer(question === answer)}>
                {question}
              </button>
            );
          })}

          {/**
          * <button className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            A: Svar på frågan
          </button>
          <button className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            B: Svar på frågan
          </button>
          <button className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            C: Svar på frågan
          </button>
          <button className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            D: Svar på frågan
          </button>
          */}
        </div>
      </div>
    </main>
  );
}
