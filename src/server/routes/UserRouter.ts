import { Router } from 'express'
import { UserController } from '../controllers/User'
import idValidator from '../middlewares/id-validator'

const router = Router()

const path = '/users'

router.route(`${path}/:id`)
    .all(idValidator)
    .get(UserController.getById)
    .put(UserController.update)

export { router }