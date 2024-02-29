import '@/styles/globals.css'
import '@/styles/adminPage.css'
import '@/styles/quizPage.css'
import Navbar from '@/components/navBar'

import { QuestionsProvider } from '@/utils/context/contextProvider'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <QuestionsProvider>
        <Component {...pageProps} />
      </QuestionsProvider>
    </>
  )
}
