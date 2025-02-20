'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require('zod');
const config_1 = require('../config');
exports.createUserSchema = zod_1.z.object({
   name: zod_1.z
      .string()
      .max(config_1.userSchemaConstants.MAX_NAME_LENGTH, config_1.userSchemaConstants.LONG_NAME_ERROR)
      .nonempty(config_1.userSchemaConstants.EMPTY_NAME),
   address: zod_1.z.string().max(20).nonempty(config_1.userSchemaConstants.EMPTY_ADDRESS),
   email: zod_1.z.string().max(30).email(config_1.userSchemaConstants.INVALID_EMAIL),
});
exports.updateUserSchema = exports.createUserSchema.partial();
