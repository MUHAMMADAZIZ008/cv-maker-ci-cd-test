import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('MAIL_HOST', 'smtp.gmail.com'),
          port: configService.get<number>('MAIL_PORT', 587),
          secure: false,
          auth: {
            user: configService.get<string>('USER_MAIL'),
            pass: configService.get<string>('USER_MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: `"CV MAKER" <${configService.get<string>('USER_MAIL')}>`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MailerModuleConfig {}
