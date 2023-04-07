import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Authors {
  @PrimaryGeneratedColumn()
  author_id: number;

  @Column('text')
  author_name: string;

  @Column('date')
  birth_date: Date;
}
