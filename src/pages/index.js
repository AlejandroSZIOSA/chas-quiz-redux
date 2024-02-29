/* import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] }); */
import { useQuestionsContext } from '@/utils/context/contextProvider'
export default function Home() {
  const { state } = useQuestionsContext()

  const { questions, index } = state
  const { question, wrongAnswers, answer } = questions[index]
  let answers = [...wrongAnswers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = answer
  }

  console.log(answers)

  return (
    <main>
      <h1 className="p-4 grid justify-center items-center bg-slate-500 rounded-md m-4">
        Quiz Page
      </h1>
    </main>
  )
}
