import { FeedbackRepository } from '../repositories/feedback-repository'
import { MailAdapter } from '../services/mail-adapter'

interface SubmitFeedbackUseCaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request

    if (!type) {
      throw new Error("O campo 'Type' é obrigatório")
    }
    if (!comment) {
      throw new Error("O campo 'Comment' é obrigatório")
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Formato de Screenshot inválido')
    }
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })
    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; color: #111 ">`,
        `<p>Tipo do Feedback: ${type} </p>`,
        `<p>Comentário: ${comment} </p>`,
        screenshot ? `<img src="${screenshot}" />` : 'Nenhuma Screenshot foi enviada',
        `</div>`
      ].join('\n')
    })
  }
}
