import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
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

  @ApiProperty({
    description: 'fill address',
    example: 'chilonzor tuman qatortol 9-mavzey',
  })
  @IsString()
  address: string;

  @ApiProperty({
    description: 'fill city',
    example: 'Andijon',
  })
  @IsString()
  city: string;

  @ApiProperty({
    description: 'fill postcode',
    example: '700001',
  })
  @IsString()
  postcode: string;

  @ApiProperty({
    description: 'fill phone',
    example: '+998901234567',
  })
  @IsString()
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

  @ApiProperty({
    description: 'fill about_text',
    example: 'i interested in hard working',
  })
  @IsString()
  about_text: string;
}
