import { Router } from 'express'
import { AuthController } from '../controllers/Auth'

const router = Router()

router.route('/signup')
    .post(AuthController.signUp)

export { router }