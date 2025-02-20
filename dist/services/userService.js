'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.saveUser = saveUser;
exports.updateUser = updateUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.deleteUserByID = deleteUserByID;
const entities_1 = require('../entities');
async function saveUser(userData) {
   const user = entities_1.User.create(userData);
   return await entities_1.User.save(user);
}
async function updateUser({ userID, userData, }) {
   const id = parseInt(userID);
   const user = await entities_1.User.findOneBy({ id: id });
   const { name, address, email } = userData;
   if (user) {
      entities_1.User.merge(user, { name, address, email });
   }
}
async function getAllUsers() {
   return await entities_1.User.find();
}
async function getUserById(userID) {
   const id = parseInt(userID);
   return await entities_1.User.findBy({ id: id });
}
async function deleteUserByID(userID) {
   const id = parseInt(userID);
   return await entities_1.User.delete({ id: id });
}
