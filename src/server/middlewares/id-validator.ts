import { z } from 'zod'
import { NextFunction, Request, Response } from 'express'

async function idValidator(req: Request<{ id: string }>, res: Response, next: NextFunction) {

    const { id } = req.params

    try {
        const ValidationSchema = z.object({
            id: z.string().length(28, {message: 'Invalid id format'})
        })

        ValidationSchema.parse({id})
        next()
    } catch (error) {
        next(error)
    }
}

export default idValidator