import express from 'express'

import { router as UsersRouter } from './UserRouter'
import { router as CountriesRouter } from './CountriesRouter'
import { router as AuthRouter } from './AuthRouter'


const router = express.Router()

router.use(UsersRouter)
router.use(CountriesRouter)
router.use(AuthRouter)

// router.use(WelcomeRoute);
// router.use(StudentsRouter);
// router.use(CoursesRouter);

// router.use(Route404);

export { router }