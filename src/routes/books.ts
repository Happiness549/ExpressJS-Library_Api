import { Router, Request, Response } from 'express';
import { body, param, validationResult } from "express-validator";
import { getAllBooks, getAllBooksById, createBooks, updateBook, deleteBook } from '../controllers/books';

const bookRouter = Router();

bookRouter.get("/", getAllBooks);

bookRouter.get("/:id", [param("id").isInt().withMessage("Id must be an integar")],(req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    getAllBooksById(req,res)
})

bookRouter.post("/",[
    body("title").notEmpty().withMessage("Name is required"),
    body("year").isInt().withMessage("Year must be a number"),  
    body("authorId").isInt().withMessage("Author ID must be a number")  
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    createBooks(req,res)
}
);

bookRouter.put("/:id", [
    param("id").isInt().withMessage("Id must be an integer"),
    body("title").notEmpty().withMessage("Title is required"),
    body("year").isInt().withMessage("Year must be a number"),
    body("authorId").isInt().withMessage("Author ID must be a number")
], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    updateBook(req, res);
});




bookRouter.delete("/:id", deleteBook);

export default bookRouter;