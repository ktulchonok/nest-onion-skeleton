import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty({ example: 'Smith' })
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({ example: 'john.smith@mail.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
