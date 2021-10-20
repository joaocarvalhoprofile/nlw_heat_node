import { Request, Response } from 'express'

import { CreateMessageService } from '../services/CreateMessageService'

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id
    const { message } = request.body

    const service = new CreateMessageService()
    const createdMessage = await service.execute({ message, user_id })

    return response.status(201).json(createdMessage)
  }
}

export { CreateMessageController }