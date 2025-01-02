import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailerModuleConfig } from './mailer/mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RolesModule,
    UsersModule,
    AuthModule,
    MailerModuleConfig,
  ],
})
export class AppModule {}
