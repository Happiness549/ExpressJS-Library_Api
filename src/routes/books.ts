import { Router, Request, Response } from 'express';
import { body, param, validationResult } from "express-validator";
import { getAllBooks, getAllBooksById, createBooks, updateBook } from '../controllers/books';

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
    body("year").isInt().withMessage("Year is required"),    
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    createBooks(req,res)
}
);

bookRouter.patch("/:id",
    updateBook);

export default bookRouter;