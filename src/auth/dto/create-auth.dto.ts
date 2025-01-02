import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({
    description: 'fill firstname',
    example: 'John',
  })
  @IsString()
  firstname: string;

  @ApiProperty({
    description: 'fill lastname',
    example: 'Doe',
  })
  @IsString()
  lastname: string;

  @IsOptional()
  address: string;

  @IsOptional()
  city: string;

  @IsOptional()
  postcode: string;

  @IsOptional()
  phone: string;

  @ApiProperty({
    description: 'fill email',
    example: 'test@email.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'password is most strong',
    example: '!Qwert12345',
  })
  @IsString()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  about_text: string;
}
