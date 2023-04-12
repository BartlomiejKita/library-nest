import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorsBooksService } from './authors_books.service';
import { CreateAuthorsBookDto } from './dto/create-authors_book.dto';
import { UpdateAuthorsBookDto } from './dto/update-authors_book.dto';

@Controller('authors-books')
export class AuthorsBooksController {
  constructor(private readonly authorsBooksService: AuthorsBooksService) {}

  @Post()
  create(@Body() createAuthorsBookDto: CreateAuthorsBookDto) {
    return this.authorsBooksService.create(createAuthorsBookDto);
  }

  @Get()
  findAll() {
    return this.authorsBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsBooksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorsBookDto: UpdateAuthorsBookDto) {
    return this.authorsBooksService.update(+id, updateAuthorsBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsBooksService.remove(+id);
  }
}
