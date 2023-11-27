import { Injectable } from '@nestjs/common';
import { IItemRepository } from '@domain/interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../entities';
import { CreateItemDto, UpdateItemDto } from '@application/dtos/item';

@Injectable()
export class ItemRepository implements IItemRepository {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async create(dto: CreateItemDto) {
    const item = new Item();
    item.name = dto.name;
    item.description = dto.description;

    return this.itemRepository.save(item);
  }

  async getById(id: number) {
    const itemId = Number(id);
    return this.itemRepository.findOneBy({ id: itemId });
  }

  async getByName(name: string) {
    return this.itemRepository.findOneBy({ name });
  }

  async getAll() {
    return this.itemRepository.find();
  }

  async remove(id: number) {
    await this.itemRepository.delete(id);
  }

  async update(dto: UpdateItemDto) {
    const itemToUpdate = await this.getById(dto.id);
    if (itemToUpdate) {
      itemToUpdate.name = dto.name;
      itemToUpdate.description = dto.description;

      return this.itemRepository.save(itemToUpdate);
    }

    throw new Error('Item to update is not exist');
  }
}
