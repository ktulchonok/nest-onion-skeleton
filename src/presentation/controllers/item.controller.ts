import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ItemService } from '@application/services/item/item.service';
import { CreateItemDto } from '@application/dtos/item/create-item.dto';
import { UpdateItemDto } from '@application/dtos/item/update-item.dto';
import { GetItemDto } from '@application/dtos/item';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  /**
   * Create a new Item
   */
  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<GetItemDto> {
    try {
      return await this.itemService.createItem(createItemDto);
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * Get all items
   */
  @Get()
  async findAll() {
    try {
      return await this.itemService.getAllItems();
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * Get an item by ID
   */
  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.itemService.getItemById(id);
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.NOT_FOUND);
    }
  }

  /**
   * Update an item with provided ID
   */
  @Put(':id')
  async update(@Body() updateItemDto: UpdateItemDto) {
    try {
      return await this.itemService.updateItem(updateItemDto);
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * Delete an item by ID
   */
  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      return await this.itemService.removeItem(id);
    } catch (err) {
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }
}
