import express from 'express';
import userRoutes from './routes/userRoutes';
import morgan from 'morgan';
import { AppDataSource } from './config/db';
import { logger } from './config';

export const app = express();
//TODO check this structure
const main = async () => {
   AppDataSource.initialize()
      .then(() => {
         logger.info('Database initialized');
         app.use(express.json());
         app.use(morgan('dev'));
         app.use('/api/user', userRoutes);
         app.listen(8080, () => {
            logger.info('App started');
         });
      })
      .catch((error) => {
         logger.error(error);
      });
};

main();
