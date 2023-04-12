import { AuthorsBooks } from 'src/authors_books/entities/authors_book.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column('text')
  book_title: string;

  @Column()
  pages: number;

  @Column('date')
  publish_date: Date;

  @OneToMany(() => AuthorsBooks, (authorsBooks) => authorsBooks.books)
  authorsBooks: AuthorsBooks[];
}
