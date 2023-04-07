import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Books } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private userRepository: Repository<Books>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    return await this.userRepository.save(createBookDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(book_id: number) {
    return await this.userRepository.findOne({ where: { book_id } });
  }

  async update(book_id: number, updateBookDto: UpdateBookDto) {
    const toUpdate = await this.userRepository.findOne({ where: { book_id } });

    const updated = Object.assign(toUpdate, updateBookDto);

    return await this.userRepository.save(updated);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
