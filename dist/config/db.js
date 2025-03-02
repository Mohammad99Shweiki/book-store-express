"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mohammadshweiki',
    password: 'admin',
    database: 'book_store',
    entities: [entities_1.User, entities_1.Book],
    synchronize: true,
});
