import express from 'express'

import { router as UsersRouter } from './UserRouter'
import { router as CountriesRouter } from './CountriesRouter'
import { router as AuthRouter } from './AuthRouter'

const router = express.Router()

router.use(UsersRouter)
router.use(CountriesRouter)
router.use(AuthRouter)

export { router }