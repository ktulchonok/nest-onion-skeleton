import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class UpdateItemDto {
  @ApiProperty({ example: '123' })
  @IsInt()
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty({ example: 'Magical Item' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Magical Item description' })
  @IsOptional()
  readonly description?: string;
}
