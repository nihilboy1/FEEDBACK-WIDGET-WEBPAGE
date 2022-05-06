import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { api } from '../../../lib/api'
import { CloseButton } from '../../CloseButton'
import { Loading } from '../../Loading'
import { FeedbackType, feedbackTypes } from '../index'
import { ScreenShotButton } from '../ScreenShotButton'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  handleRestartFeedback: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep({
  feedbackType,
  handleRestartFeedback,
  onFeedbackSent
}: FeedbackContentStepProps) {
  const [screenshot, setScreenShot] = useState<String | null>(null)
  const [comment, setComment] = useState<string>('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const feedbackTypeInfos = feedbackTypes[feedbackType]

  async function handleSubmitFeedBack(e: FormEvent) {
    setIsSendingFeedback(true)
    e.preventDefault()
    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })
    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          onClick={handleRestartFeedback}
          type="button"
          className=" top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfos.image.source}
            alt={feedbackTypeInfos.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfos.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedBack} className="my-4 w-full">
        <textarea
          className=" min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-w-2"
          placeholder="Relate o problema detalhadamente aqui..."
          onChange={e => setComment(e.target.value)}
        ></textarea>

        <footer className="flex gap-2 my-1">
          <ScreenShotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenShot}
          />
          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className=" p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus: ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar Feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
