'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.controllerErrors = exports.userSchemaConstants = void 0;
exports.userSchemaConstants = {
   MAX_NAME_LENGTH: 15,
   LONG_NAME_ERROR: 'entered is too long you are only allowed to have 15 characters in your name',
   EMPTY_NAME: 'please make sure to enter your name',
   EMPTY_ADDRESS: 'make sure to enter your address',
   INVALID_EMAIL: 'make sure you entered a valid Email',
};
exports.controllerErrors = {
   NOT_FOUND: 'not found',
   UPDATE_ERROR: 'Error in updating user, recheck your request',
};
