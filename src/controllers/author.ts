import {Request, Response} from 'express'
import { Author } from '../models/author'

let authors: Author[] = [] ;

export const getAllAuthors = (req:Request, res: Response) => {
    res.status(200).json(authors)
}


export const getAuthorById = (req:Request, res:Response) => {
    const {id} = req.params;
    const author = authors.find((author) =>author.id === parseInt(String(id)));

    if(!author){
        return res.status(404).json({message: "User not found"});
    } 
    res.status(200).json(author);

}

export const createAuthor = (req: Request, res: Response) =>{
    const {name, surname} =req.body;
    const newUser:Author  = {id: authors.length + 1, name, surname};
    authors.push(newUser);
    res.status(201).json(newUser);
}

export const updateAuthor = (req: Request, res: Response) => {

    const {id} = req.params;
    const updates: Partial<Author> = req.body
    
    const author = authors.find(author => author.id === parseInt(String(id)));
    if(!author) return res.status(404).json({message: "Author not found"});

    if(updates.name !== undefined) author.name = updates.name;
    if (updates.surname !== undefined) author.surname = updates.surname;

    res.status(200).json(author)
  
}

export const deleteAuthor = (req: Request, res: Response) => {
    const {id} = req.params;

const authorIndex = authors.findIndex(author => author.id === parseInt(String(id)));

if(authorIndex === -1){
    return res.status(404).json({message: "Author not found"});

}

const deleteAuthor = authors.splice(authorIndex, 1);

res.status(200).json(deleteAuthor[0]);

};