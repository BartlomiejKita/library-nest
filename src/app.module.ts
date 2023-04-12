import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsBooksModule } from './authors_books/authors_books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'Bartek',
      password: 'BartekPC',
      database: 'library_app',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    BooksModule,
    AuthorsModule,
    AuthorsBooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
