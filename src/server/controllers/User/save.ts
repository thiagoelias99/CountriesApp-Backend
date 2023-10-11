import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'

import { userServices } from '../../../services'
import { IUser } from '../../../Entities/User'

async function save(req: Request, res: Response, next: NextFunction) {
    try {
        const user = req.body
        saveValidation(user)
        // const createdUser = await userServices.createUser(user)
        res.status(StatusCodes.CREATED).json(user)
    } catch (error) {
        next(error)
    }
}

export default save

function saveValidation(user: IUser) {
    const ValidationSchema = z.object({
        id: z.string().uuid(),
        name: z.string().min(1),
        email: z.string().email(),
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