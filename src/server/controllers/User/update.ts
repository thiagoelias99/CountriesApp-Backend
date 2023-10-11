import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

import { userServices } from '../../../services'
import { IUser, IUserUpdate } from '../../../Entities/User'

async function update(req: Request<{ id: string }, {}, IUserUpdate>, res: Response, next: NextFunction) {
    try {
        const id = req.params.id
        const data = req.body
        const validatedData = await saveValidation(data)
        await userServices.update(id, validatedData)
        res.status(StatusCodes.OK).json(validatedData)
    } catch (error) {
        next(error)
    }
}

export default update

async function saveValidation(user: IUserUpdate) {
    const ValidationSchema = z.object({
        countries: z.array(z.object({
            cca2: z.string().length(2),
            namePt: z.string().min(1),
            nameUs: z.string().min(1),
            nameEs: z.string().min(1),
            flagPng: z.string().min(1),
            flagSvg: z.string().min(1)
        })).optional(),
        notes: z.array(z.object({
            id: z.string().uuid(),
            title: z.string().optional(),
            content: z.string().optional(),
            countryCCA2: z.string().length(2).optional()
        })).optional()
    })

    return ValidationSchema.parse(user)
}