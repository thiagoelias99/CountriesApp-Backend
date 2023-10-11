import { Router } from 'express'
import { AuthController } from '../controllers/Auth'
// import idValidator from '../middlewares/id-validator'

const router = Router()

router.route('/signup')
    .post(AuthController.signUp)

export { router }