import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from './item.service';
import { IItemRepository } from '@domain/interfaces/item.repository.interface';
import { ITEM_REPOSITORY_TOKEN } from '@domain/constants';

describe('UserService', () => {
  let service: ItemService;
  let mockItemRepository: Partial<IItemRepository>;

  beforeEach(async () => {
    mockItemRepository = {
      getById: jest.fn(),
      create: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemService,
        {
          provide: ITEM_REPOSITORY_TOKEN,
          useValue: mockItemRepository,
        },
      ],
    }).compile();

    service = module.get<ItemService>(ItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
