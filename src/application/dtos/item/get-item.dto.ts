import { IItem } from '@domain/entities';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class GetItemDto {
  @ApiProperty({ example: '123' })
  @IsInt()
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty({ example: 'Magical Item' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Magical Item description' })
  readonly description: string;

  constructor(item: IItem) {
    this.id = item.id;
    this.name = item.name;
    this.description = item.description;
  }
}
