import express = require('express');
import type { Express } from 'express';
import bodyParser = require('body-parser');
import router from './routes/author';
import bookRouter from './routes/books';
import {notFoundHandler, errorHandler} from './middleware/error';
import { loggerMiddleware } from './middleware/logger';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use(errorHandler);
app.use("/v1/authors", router);
app.use("/v2/books", bookRouter);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} `);
})