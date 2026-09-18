import express = require('express');
import type { Express } from 'express';
import bodyParser = require('body-parser');
import { getAllAuthors } from './controllers/author';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT} `);
})