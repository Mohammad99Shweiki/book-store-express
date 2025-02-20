import { Router } from 'express';
import { create, update, getByID, getAll, deleteByID } from '../controllers';
import { validateSchema } from '../middleware';
import { createUserSchema, updateUserSchema } from '../schemas';

const userRouter = Router();

userRouter.post('/', validateSchema(createUserSchema), create);
userRouter.put('/:id', validateSchema(updateUserSchema), (req, res) => {
   update(req, res);
});
userRouter.get('/:id', (req, res) => {
   getByID(req, res);
});
userRouter.get('/', getAll);
userRouter.delete('/:id', (req, res) => {
   deleteByID(req, res);
});

export default userRouter;
