import { DataSource } from 'typeorm';
import { User, Book } from '../entities';

export const AppDataSource = new DataSource({
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'mohammadshweiki',
   password: 'admin',
   database: 'book_store',
   entities: [User, Book],
   synchronize: true,
});
