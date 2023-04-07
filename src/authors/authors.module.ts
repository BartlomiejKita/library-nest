import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Authors } from './entities/author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Authors])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
