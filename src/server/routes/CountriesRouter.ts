import { Router } from 'express'
import { CountriesController } from '../controllers/Countries'
// import idValidator from '../middlewares/id-validator'

const router = Router()

const path = '/countries'

// router.route(path)
// .post(UserController.post)
// .get(CountriesController.get)

router.route(`${path}/:name`)
    // .all(idValidator)
    .get(CountriesController.searchByName)
// .put(UserController.put)
// .delete(UserController.remove)

router.route(`${path}/cca2/:cca2`)
    .get(CountriesController.getByCCA2)


export { router }