import { Router, Request, Response } from 'express';
import { body, param, validationResult } from "express-validator";
import { getAllBooks, getAllBooksById } from '../controllers/books';

const router = Router();

router.get("/", getAllBooks);

router.get("/:id", [param("id").isInt().withMessage("Id must be an integar")],(req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    getAllBooksById(req,res)
})