import { io } from '../app'
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

    const infoWS = {
      text: newMessage.text,
      user_id: newMessage.user_id,
      created_at: newMessage.created_at,
      user: {
        name: newMessage.User.name,
        avatar_url: newMessage.User.avatar_url
      }
    }

    io.emit("new_message", infoWS)

    return newMessage
  }
}

export { CreateMessageService }