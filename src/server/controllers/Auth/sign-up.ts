import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'
import { ISignUp } from '../../../Entities/Auth'
import { authServices } from '../../../services'

async function signUp(req: Request<{}, {}, ISignUp>, res: Response, next: NextFunction) {
    try {
        const data = req.body
        signUpValidation(data)
        const createdUser = await authServices.signUp(data)
        res.status(StatusCodes.CREATED).json({id: createdUser})
    } catch (error) {
        next(error)
    }
}

export default signUp

function signUpValidation(data: ISignUp) {
    const ValidationSchema = z.object({
        name: z.string().min(3).max(255),
        email: z.string().email(),
        password: z.string().min(6).max(255)
    })

    return ValidationSchema.parse(data)
}