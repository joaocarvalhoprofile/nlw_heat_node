
interface IMessage {
  text: string
  user_id: string
}

class CreateMessageService {
  async execute({ text, user_id }: IMessage) {

  }
}

export { CreateMessageService }