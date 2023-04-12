import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsBooksService } from './authors_books.service';

describe('AuthorsBooksService', () => {
  let service: AuthorsBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorsBooksService],
    }).compile();

    service = module.get<AuthorsBooksService>(AuthorsBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
