import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';
import { logger } from '../config';

export function validateSchema(schema: z.ZodSchema) {
   return (req: Request, res: Response, next: NextFunction) => {
      try {
         const validatedData = schema.parse(req.body);
         req.body = validatedData;
         next();
      } catch (error) {
         if (error instanceof ZodError) {
            const errorMessages = error.errors.map((ZodError) => ({
               message: `${ZodError.path.join('.')} is ${ZodError.message}`,
            }));
            res.status(StatusCodes.BAD_REQUEST).json({
               error: StatusCodes.BAD_REQUEST.toString,
               errorMessages,
            });
            logger.error(error);
         } else {
            logger.info(error);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
               error: StatusCodes.INTERNAL_SERVER_ERROR.toString,
            });
         }
      }
   };
}
