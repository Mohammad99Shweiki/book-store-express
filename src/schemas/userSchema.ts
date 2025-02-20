import { z } from 'zod';
import { userSchemaConstants } from '../config';

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;

export const createUserSchema = z.object({
   name: z
      .string()
      .max(
         userSchemaConstants.MAX_NAME_LENGTH,
         userSchemaConstants.LONG_NAME_ERROR,
      )
      .nonempty(userSchemaConstants.EMPTY_NAME),
   address: z.string().max(20).nonempty(userSchemaConstants.EMPTY_ADDRESS),
   email: z.string().max(30).email(userSchemaConstants.INVALID_EMAIL),
});

export const updateUserSchema = createUserSchema.partial();
