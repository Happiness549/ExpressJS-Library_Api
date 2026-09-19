import { Router, Request, Response } from 'express';
import { body, param, validationResult } from "express-validator";
import { getAllBooks } from '../controllers/books';

const router = Router();

router.get("/", getAllBooks);