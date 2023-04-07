import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Authors } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Authors)
    private userRepository: Repository<Authors>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.userRepository.save(createAuthorDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(author_id: number) {
    return await this.userRepository.findOne({ where: { author_id } });
  }

  async update(author_id: number, updateAuthorDto: UpdateAuthorDto) {
    const toUpdate = await this.userRepository.findOne({
      where: { author_id },
    });

    const updated = Object.assign(toUpdate, updateAuthorDto);

    return await this.userRepository.save(updated);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
