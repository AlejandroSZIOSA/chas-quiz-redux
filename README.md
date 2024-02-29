This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#

##

###

#### reorder quiz + variables

```js
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
}
```

contextProvider

- more props to turn into useState

```js
const initialState = {
  //time consideration

  waiting: true,

  loading: false,

  //keep track of statistics

  index: 0,

  correct: 0,

  error: false,

  questions: [
    {
      id: 1,

      question: 'Question 1',

      answer: 'Answer 1',

      wrongAnswers: ['w1', 'w2', 'w3'],

      points: 2,
    },

    {
      id: 2,

      question: 'Question 2',

      answer: 'Answer 2',

      wrongAnswers: ['w1', 'w2', 'w3', 'w4'],

      points: 5,
    },
  ],
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
