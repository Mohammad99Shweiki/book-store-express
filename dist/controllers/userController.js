'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.deleteByID = exports.getByID = exports.getAll = exports.update = exports.create = void 0;
const services_1 = require('../services');
const http_status_codes_1 = require('http-status-codes');
const config_1 = require('../config');
const create = async (req, res) => {
   const user = await (0, services_1.saveUser)(req.body);
   res.json(user);
};
exports.create = create;
const update = async (req, res) => {
   try {
      const user = (0, services_1.updateUser)({
         userID: req.params.id,
         userData: req.body,
      });
      res.json(user);
   }
   catch (error) {
      config_1.logger.error(error);
      res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(config_1.controllerErrors.UPDATE_ERROR);
   }
};
exports.update = update;
const getAll = async (_request, res) => {
   const users = await (0, services_1.getAllUsers)();
   res.json(users);
};
exports.getAll = getAll;
const getByID = async (req, res) => {
   const user = await (0, services_1.getUserById)(req.params.id);
   if (!user) {
      res.status(404).json({
         error: config_1.controllerErrors.NOT_FOUND,
      });
   }
   res.json(user);
};
exports.getByID = getByID;
const deleteByID = async (req, res) => {
   const result = await (0, services_1.deleteUserByID)(req.params.id);
   res.json(result);
};
exports.deleteByID = deleteByID;
