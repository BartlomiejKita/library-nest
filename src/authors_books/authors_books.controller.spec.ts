import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsBooksController } from './authors_books.controller';
import { AuthorsBooksService } from './authors_books.service';

describe('AuthorsBooksController', () => {
  let controller: AuthorsBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorsBooksController],
      providers: [AuthorsBooksService],
    }).compile();

    controller = module.get<AuthorsBooksController>(AuthorsBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
