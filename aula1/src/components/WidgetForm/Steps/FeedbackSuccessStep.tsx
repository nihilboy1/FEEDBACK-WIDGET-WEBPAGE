import { CloseButton } from '../../CloseButton'
import successimg from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        {' '}
        <CloseButton />
      </header>
      <div className="flex flex-col py-10 w-[304px] items-center">
        <img
          src={successimg}
          alt="Icone de tarefa concluída"
          className="w-10 h-10"
        />
        <span className="text-xl m-5">Agradeçemos o Feedback</span>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="py-2 px-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus: ring-brand-500 "
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
