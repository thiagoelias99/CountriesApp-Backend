import express from 'express'

import { router as UsersRouter } from './UserRouter'
import { router as CountriesController } from './CountriesRouter'

const router = express.Router()

router.use(UsersRouter)
router.use(CountriesController)

// router.use(WelcomeRoute);
// router.use(StudentsRouter);
// router.use(CoursesRouter);

// router.use(Route404);

export { router }