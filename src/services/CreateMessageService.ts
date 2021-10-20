import prismaClient from '../prisma'

interface IMessage {
  message: string
  user_id: string
}

class CreateMessageService {
  async execute({ message, user_id }: IMessage) {
    const newMessage = await prismaClient.message.create({
      data: {
        text: message,
        user_id
      },
      include: {
        User: true,
      }
    })

    return newMessage
  }
}

export { CreateMessageService }