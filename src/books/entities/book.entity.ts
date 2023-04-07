import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
