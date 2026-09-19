import {Request, Response} from 'express'
import { Books } from '../models/books'
import router from '../routes/author';

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

export const createBooks = (req: Request, res: Response) => {
    const {title, year, authorId} = req.body;
    const newBook:Books = {id: books.length + 1, title, year, authorId }
    books.push(newBook);
    res.status(201).json(newBook)
}


export const updateBook = (req: Request, res: Response) => {

    const {id} = req.params;
    const updates: Partial<Books> = req.body
    
    const author = books.find(author => author.id === parseInt(String(id)));
    if(!author) return res.status(404).json({message: "Author not found"});

    if(updates.title !== undefined) author.title = updates.title;
    if (updates.year !== undefined) author.year = updates.year;

    res.status(200).json(author)
  
};

export const deleteBook = (req: Request, res: Response) => {
    const {id} = req.params;

const bookIndex = books.findIndex(book => book.id === parseInt(String(id)));

if(bookIndex === -1){
    return res.status(404).json({message: "Author not found"});

}

const deleteAuthor = books.splice(bookIndex, 1);

res.status(200).json(deleteAuthor[0]);

}

