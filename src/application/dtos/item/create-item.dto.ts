import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateItemDto {
  @ApiProperty({ example: 'Magical Item' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Magical Item description' })
  @IsOptional()
  readonly description?: string = '';
}
