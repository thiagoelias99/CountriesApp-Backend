import { Router } from 'express'
import { CountriesController } from '../controllers/Countries'

const router = Router()

const path = '/countries'

router.route(`${path}/:name`)
    .get(CountriesController.searchByName)

router.route(`${path}/cca2/:cca2`)
    .get(CountriesController.getByCCA2)

export { router }