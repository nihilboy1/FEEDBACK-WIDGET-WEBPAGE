import {MailAdapter, SendMailData} from "../mail-adapter"
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '0c679ef2d505f3',
    pass: 'ebb1ca60bb9359'
  }
})
export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
  await transport.sendMail({
    from: "Equipe feedget <oi@feedget.com>",
    to: "Samuel Severiano <samuelseve1@gmail.com>",
    subject,
    html: body
  })
  } 
}