import { Request, Response, NextFunction } from 'express'
import { countryServices } from '../../../services'
import { StatusCodes } from 'http-status-codes'

async function getByCCA2(req: Request, res: Response, next: NextFunction){
    try {
        const cca2 = req.params.cca2    
        const countries = await countryServices.getByCCA2(cca2)    
        res.status(StatusCodes.OK).json(countries)        
    } catch (error) {
        next(error)
    }
}

export default getByCCA2