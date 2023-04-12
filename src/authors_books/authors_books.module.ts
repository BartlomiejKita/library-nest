import { Module } from '@nestjs/common';
import { AuthorsBooksService } from './authors_books.service';
import { AuthorsBooksController } from './authors_books.controller';

@Module({
  controllers: [AuthorsBooksController],
  providers: [AuthorsBooksService],
})
export class AuthorsBooksModule {}
