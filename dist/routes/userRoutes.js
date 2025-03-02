"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middleware_1 = require("../middleware");
const schemas_1 = require("../schemas");
const userRouter = (0, express_1.Router)();
userRouter.post('/', (0, middleware_1.validateSchema)(schemas_1.createUserSchema), controllers_1.create);
userRouter.put('/:id', (0, middleware_1.validateSchema)(schemas_1.updateUserSchema), (req, res) => {
    (0, controllers_1.update)(req, res);
});
userRouter.get('/:id', (req, res) => {
    (0, controllers_1.getByID)(req, res);
});
userRouter.get('/', controllers_1.getAll);
userRouter.delete('/:id', (req, res) => {
    (0, controllers_1.deleteByID)(req, res);
});
exports.default = userRouter;
