import { Router, Request, Response } from 'express';
import { body, param, validationResult } from "express-validator";
import {getAllAuthors, createAuthor} from '../controllers/author'

const router = Router();

router.get("/", getAllAuthors);

router.post("/",[
    body("name").notEmpty().withMessage("Name is required"),
    body("surname").notEmpty().withMessage("Surname is required"),    
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    createAuthor(req,res)
}
);

export default router;