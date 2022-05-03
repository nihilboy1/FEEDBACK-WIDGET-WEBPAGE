import bugimageurl from '../../assets/bug.svg'
import ideaimageurl from '../../assets/idea.svg'
import thoughtimageurl from '../../assets/thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugimageurl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEIA: {
    title: 'Idea',
    image: {
      source: ideaimageurl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtimageurl,
      alt: 'Imagem de uma nuvem de pensamentos'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedBackSent] = useState<boolean>(false)
  function handleRestartFeedback() {
    setFeedBackType(null)
    setFeedBackSent(false)
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
          ) : (
            <FeedbackContentStep
              handleRestartFeedback={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedBackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://www.rocketseat.com.br/"
          target={`_blank`}
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
