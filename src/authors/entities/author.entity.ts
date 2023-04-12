import { AuthorsBooks } from 'src/authors_books/entities/authors_book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Authors {
  @PrimaryGeneratedColumn()
  author_id: number;

  @Column('text')
  author_name: string;

  @Column('date')
  birth_date: Date;

  @OneToMany(() => AuthorsBooks, (authorsBooks) => authorsBooks.authors)
  authorsBooks: AuthorsBooks[];
}
