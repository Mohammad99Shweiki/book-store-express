import { User } from '../entities';
import { CreateUserDTO, UpdateUserDTO } from '../schemas';

export async function saveUser(userData: CreateUserDTO) {
   const user = User.create(userData);
   return await User.save(user);
}

export async function updateUser({
   userID,
   userData,
}: {
   userID: string;
   userData: UpdateUserDTO;
}) {
   const id: number = parseInt(userID);
   const user = await User.findOneBy({ id: id });
   const { name, address, email } = userData;
   if (user) {
      User.merge(user, { name, address, email });
   }
}

export async function getAllUsers() {
   return await User.find();
}

export async function getUserById(userID: string) {
   const id: number = parseInt(userID);
   return await User.findBy({ id: id });
}

export async function deleteUserByID(userID: string) {
   const id: number = parseInt(userID);
   return await User.delete({ id: id });
}
