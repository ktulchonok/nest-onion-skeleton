import { Inject, Injectable } from '@nestjs/common';
import { IItemRepository } from '@domain/interfaces/item.repository.interface';
import { CreateItemDto, UpdateItemDto, GetItemDto } from '@application/dtos/item';
import { ITEM_REPOSITORY_TOKEN } from '@domain/constants';

@Injectable()
export class ItemService {
  constructor(
    @Inject(ITEM_REPOSITORY_TOKEN)
    private readonly itemRepository: IItemRepository,
  ) {}

  async createItem(dto: CreateItemDto): Promise<GetItemDto> {
    const item = await this.itemRepository.create(dto);
    if (item && item.id) {
      return new GetItemDto(item);
    }

    throw new Error(`Cannot create new Item`);
  }

  async getItemById(id: number): Promise<GetItemDto> {
    const item = await this.itemRepository.getById(id);
    if (item) {
      return new GetItemDto(item);
    }

    throw new Error(`Item with ID ${id} not found`);
  }

  async getAllItems(): Promise<GetItemDto[]> {
    const items = await this.itemRepository.getAll();

    return items.map((item) => new GetItemDto(item));
  }

  async updateItem(dto: UpdateItemDto): Promise<GetItemDto> {
    const item = await this.itemRepository.update(dto);
    if (item) {
      return new GetItemDto(item);
    }

    throw new Error(`Cannot update Item with id ${dto.id}`);
  }

  async removeItem(id: number): Promise<void> {
    return this.itemRepository.remove(id);
  }
}
