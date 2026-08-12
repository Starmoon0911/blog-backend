require('dotenv').config();
import express from 'express'
import logger from './src/utils/logger';
const app = express();
const PORT = process.env.PORT || 9000;




app.listen(PORT,() =>{
    logger.info(`Server is runnig on port ${PORT}`)
})




