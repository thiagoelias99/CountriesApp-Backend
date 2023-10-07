import { Router } from 'express'
import { CountriesController } from '../controllers/Countries'
// import idValidator from '../middlewares/id-validator'

const router = Router()

const path = '/countries'

// router.route(path)
    // .post(UserController.post)
    // .get(UserController.get)

router.route(`${path}/:id`)
    // .all(idValidator)
    .get(CountriesController.searchByName)
    // .put(UserController.put)
    // .delete(UserController.remove)

export { router }