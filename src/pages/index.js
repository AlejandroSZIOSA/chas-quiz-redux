/* import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] }); */
import { useQuestionsContext } from "@/utils/context/contextProvider";
//import Falskt from"./trueOrFalseComp/falskt"
import { useState, useEffect } from "react";
import Next from "./nextAndPrivious/next";
import Privious from "./nextAndPrivious/privious";

export default function Home() {
  const { state } = useQuestionsContext();

  const { questions, index } = state;
  const { question, wrongAnswers, answer } = questions[index];
  let answers = [...wrongAnswers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = answer;
  }

  console.log(answers);

  return (
    <main className=" grid h-[771px] justify-around   bg-slate-700 ">
      <div className="grid grid-cols-2 p-[0.1px] ">
        <div className="bg-slate-100 grid">
          <Privious />
        </div>
        <div className="bg-slate-100 grid ">
          <Next />
        </div>
      </div>
      <div className="bg-slate-300 grid pt-4">
        <div className=" grid  max-w-xl m-6 ">
          <h4 className="bg-slate-400  items-center  grid p-4 rounded-3xl text-center">
            gjernerjgn erjgoerg rjehgbjergor jrngerngorngoerngrognoer
            rgornegoierng hbsdjsjdfsdfj sdhbfsbdfjbf gjernerjgn erjgoerg
            rjehgbjergor jrngerngorngoerngrognoer rgornegoierng hbsdjsjdfsdfj
            sdhbfsbdfjbf gjernerjgn erjgoerg rjehgbjergor
            jrngerngorngoerngrognoer rgornegoierng hbsdjsjdfsdfj sdhbfsbdfjbf
          </h4>
        </div>
        <div className=" grid  bg-slate-200  grid-rows-2 justify-self-center gap-x-24 p-16 rounded-t-3xl  items-center  grid-cols-2">
          <button className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
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
        </div>
      </div>
    </main>
  );
}
