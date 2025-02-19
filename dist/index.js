"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.app = void 0;
const typeorm_1 = require("typeorm");
const Book_1 = require("./entities/Book");
const User_1 = require("./entities/User");
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan_1 = __importDefault(require("morgan"));
exports.app = (0, express_1.default)();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: `mohammadshweiki`,
    password: 'admin',
    database: 'book_store',
    entities: [User_1.User, Book_1.Book],
    synchronize: true,
});
const main = async () => {
    exports.AppDataSource.initialize()
        .then(() => {
        console.log('Database initialized');
        exports.app.use(express_1.default.json());
        exports.app.use((0, morgan_1.default)('dev'));
        exports.app.use('/api/user', userRoutes_1.default);
        exports.app.listen(8080, () => {
            console.log('Now running on port 8080');
        });
    })
        .catch((err) => {
        console.log('Error in initializing Database');
        console.log(err);
    });
};
main();
