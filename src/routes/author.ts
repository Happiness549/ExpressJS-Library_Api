import { Router, Request, Response } from 'express';
import { body, param, validationResult } from "express-validator";
import {getAllAuthors, createAuthor, getAuthorById, updateAuthor, deleteAuthor} from '../controllers/author'
import { getBookByAuthorId } from '../controllers/author';

const router = Router();

router.get("/", getAllAuthors);

router.get("/:id", [param("id").isInt().withMessage("Id must be an integar")],(req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    getAuthorById(req,res)
})

router.get("/:id/books", 
    [param("id").isInt().withMessage("Id must be an integar")
    ],(req: Request, res: Response) => {
    const errors = validationResult(req);  
    console.log(errors, "There was an error");

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    getBookByAuthorId(req,res)
});

router.post("/",[
    body("name").notEmpty().withMessage("Name is required"),
    body("surname").notEmpty().withMessage("Surname is required"),    
], (req: Request, res: Response) => {
    console.log(req.body);
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    createAuthor(req,res)
}
);

router.put("/:id",[
    body("name").notEmpty().withMessage("Name is required"),
    body("surname").notEmpty().withMessage("Surname is required"),
], (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    updateAuthor(req,res)
});

router.delete("/:id", deleteAuthor);

export default router;