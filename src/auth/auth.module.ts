import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { CustomMailerService } from 'src/mailer/mailer.service';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, CustomMailerService],
})
export class AuthModule {}
