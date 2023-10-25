import { Request, Response, NextFunction } from 'express'
import { countryServices } from '../../../services'
import { StatusCodes } from 'http-status-codes'

async function getAll(req: Request, res: Response, next: NextFunction){
    try {
        const countries = await countryServices.getAll()    
        res.status(StatusCodes.OK).json(countries)        
    } catch (error) {
        next(error)
    }
}

export default getAll