"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = require("./config/db");
const config_1 = require("./config");
exports.app = (0, express_1.default)();
//TODO check this structure
const main = async () => {
    db_1.AppDataSource.initialize()
        .then(() => {
        config_1.logger.info('Database initialized');
        exports.app.use(express_1.default.json());
        exports.app.use((0, morgan_1.default)('dev'));
        exports.app.use('/api/user', userRoutes_1.default);
        exports.app.listen(8080, () => {
            config_1.logger.info('App started');
        });
    })
        .catch((error) => {
        config_1.logger.error(error);
    });
};
main();
