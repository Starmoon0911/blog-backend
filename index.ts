require('dotenv').config();
import express from 'express'
import logger from './src/utils/logger';
import { errorHandler } from './src/middleware/errorHandler';
import { notFoundHandler } from './src/middleware/notFound';
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());


app.use(notFoundHandler);
app.use(errorHandler)


app.listen(PORT,() =>{
    logger.info(`Server is runnig on port ${PORT}`)
})




