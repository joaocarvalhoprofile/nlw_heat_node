import { Router } from 'express'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'

const AuthenticateUserRoutes = Router()

AuthenticateUserRoutes.post("/authenticate", new AuthenticateUserController().handle)

export { AuthenticateUserRoutes }

