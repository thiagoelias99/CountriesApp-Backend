import e, { ErrorRequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'

import { CCANotFoundError, IdNotFoundError } from '../../errors'
import { ZodError } from 'zod'
import { FirebaseError } from 'firebase/app'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log('Error Handler...')
    console.error(err)

    if (err instanceof CCANotFoundError) { res.status(StatusCodes.NOT_FOUND).json(err.message); return }
    if (err instanceof IdNotFoundError) { res.status(StatusCodes.NOT_FOUND).json(err.message); return }

    if (err instanceof ZodError) {
        const errorList: { param: string, message: string }[] = []
        err.issues.forEach((value) => {
            errorList.push({ param: value.path.toString(), message: value.message })
        })
        res.status(StatusCodes.BAD_REQUEST).json(errorList)
        return
    }

    if (err instanceof FirebaseError) {
        if(err.code === 'auth/email-already-in-use') {
            res.status(StatusCodes.BAD_REQUEST).json("email already exists")
            return
        }        
    }

    console.log('...Server is up...')
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
}

export default errorHandler