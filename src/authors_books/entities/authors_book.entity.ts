import { Authors } from 'src/authors/entities/author.entity';
import { Books } from 'src/books/entities/book.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthorsBooks {
  @PrimaryGeneratedColumn()
  authorsBooks_id: number;

  @Column('text')
  book_id: number;

  @Column()
  author_id: number;

  @ManyToOne(() => Authors, (author) => author.authorsBooks)
  authors: Authors;

  @ManyToOne(() => Books, (book) => book.authorsBooks)
  books: Books;
}
