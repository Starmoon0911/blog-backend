require('dotenv').config();
import express from 'express'
import logger from './src/utils/logger';
import { errorHandler } from './src/middleware/errorHandler';
import { notFoundHandler } from './src/middleware/notFound';
import Auth from './src/route/auth.route'
const app = express();
import cors from 'cors'
const PORT = process.env.PORT || 9000;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use('/api/v1',Auth)
app.use(notFoundHandler);
app.use(errorHandler)


app.listen(PORT,() =>{
    logger.info(`Server is runnig on port ${PORT}`)
})




