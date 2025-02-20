import {
   BaseEntity,
   Column,
   CreateDateColumn,
   Entity,
   PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
   @PrimaryGeneratedColumn()
      id!: number;

   @Column({ nullable: true })
      name?: string;

   @Column({ nullable: true })
      address?: string;

   @Column({ nullable: true })
      email?: string;
   @CreateDateColumn()
      creationDate?: Date;

   // @OneToMany(() => Book, (Book) => Book.id)
   // @JoinTable()
   // books: Book[];
}
