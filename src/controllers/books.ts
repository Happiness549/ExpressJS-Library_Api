import {Request, Response} from 'express'
import { Books } from '../models/books'

let books: Books[] = [];

export const getAllBooks = (req:Request, res: Response) => {
    res.status(200).json(books)
}

export const getAllBooksById = (req: Request, res: Response) => {
    const {id} = req.params;
    const book = books.filter(book => book.id === parseInt(String(id)));

    if(!book){
        return res.status(404).json({message: "Book not found"})
    } 

        return res.status(200).json(book);

    
}