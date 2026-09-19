import express = require('express');
import type { Express } from 'express';
import bodyParser = require('body-parser');
import router from './routes/author';
import bookRouter from './routes/books';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/v1/authors", router);
app.use("/v2/books", bookRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} `);
})