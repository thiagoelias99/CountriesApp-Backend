import { Request, Response, NextFunction } from 'express'
import { userServices } from '../../../services'
import { StatusCodes } from 'http-status-codes'

async function getById(req: Request, res: Response, next: NextFunction){
    try {
        const id = req.params.id    
        const user = await userServices.getById(id)    
        res.status(StatusCodes.OK).json(user)        
    } catch (error) {
        next(error)
    }
}

export default getById