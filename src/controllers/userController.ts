import { Request, Response } from 'express';
import {
   deleteUserByID,
   getAllUsers,
   getUserById,
   saveUser,
   updateUser,
} from '../services';
import { StatusCodes } from 'http-status-codes';
import { controllerErrors, logger } from '../config';

export const create = async (req: Request, res: Response) => {
   const user = await saveUser(req.body);
   res.json(user);
};

export const update = async (req: Request, res: Response) => {
   try {
      const user = updateUser({
         userID: req.params.id,
         userData: req.body,
      });
      res.json(user);
   } catch (error) {
      logger.error(error);
      res.status(StatusCodes.BAD_REQUEST).json(controllerErrors.UPDATE_ERROR);
   }
};

export const getAll = async (_request: Request, res: Response) => {
   const users = await getAllUsers();
   res.json(users);
};

export const getByID = async (req: Request, res: Response) => {
   const user = await getUserById(req.params.id);
   if (!user) {
      res.status(404).json({
         error: controllerErrors.NOT_FOUND,
      });
   }
   res.json(user);
};

export const deleteByID = async (req: Request, res: Response) => {
   const result = await deleteUserByID(req.params.id);
   res.json(result);
};
