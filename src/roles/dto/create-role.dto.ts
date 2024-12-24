import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { IUserRole } from '../../utils/enums';
export class CreateRoleDto {
  @ApiProperty({
    description: 'enter user role is most be enum',
    example: 'admin',
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(IUserRole, { message: 'role most be [admin, user, superAdmin]' })
  name: string;

  @ApiProperty({
    description: 'avtive of role',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;
}
