import {Request, Response} from 'express'
import { author } from '../models/author'

export const getAllAuthors = (req:Request, res: Response) => {
    res.status(200).json(author)
}

// export getAuthorById =(req:Request, res:Response) => {

// }