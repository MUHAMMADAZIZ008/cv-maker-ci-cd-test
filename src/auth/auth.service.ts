import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UsersService } from 'src/users/users.service';
import { CustomMailerService } from 'src/mailer/mailer.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly configeService: ConfigService,
    private readonly userService: UsersService,
    private readonly mailerService: CustomMailerService,
  ) {}
  async singup(createAuthDto: CreateAuthDto) {
    const newUser = await this.userService.create(createAuthDto);
    const link = `${this.configeService.get<string>('APP_HOST')}/auth/user-active/${newUser.id}`;
    await this.mailerService.sendUserActiveLink(newUser.email, link);
    return {
      message: `active link's been sent your email`,
    };
  }
}
