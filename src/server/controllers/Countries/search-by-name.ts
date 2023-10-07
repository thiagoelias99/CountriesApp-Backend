import { Request, Response, NextFunction } from 'express'
import { countryServices } from '../../../services'
import { StatusCodes } from 'http-status-codes'

async function searchByName(req: Request, res: Response, next: NextFunction){
    try {
        const name = req.params.name    
        const countries = await countryServices.searchByName(name)    
        res.status(StatusCodes.OK).json(countries)        
    } catch (error) {
        next(error)
    }
}

export default searchByName