import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorsBookDto } from './create-authors_book.dto';

export class UpdateAuthorsBookDto extends PartialType(CreateAuthorsBookDto) {}
