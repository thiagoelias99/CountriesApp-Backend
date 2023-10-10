import { ErrorRequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'

import { CCANotFoundError, IdNotFoundError } from '../../errors'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log('Error Handler...')
    console.error(err)

    if (err instanceof CCANotFoundError) { res.status(StatusCodes.NOT_FOUND).json(err.message); return }
    if (err instanceof IdNotFoundError) { res.status(StatusCodes.NOT_FOUND).json(err.message); return }

    console.log('...Server is up...')
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
}

export default errorHandler