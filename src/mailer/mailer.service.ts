import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class CustomMailerService {
  constructor(private readonly mailerService: MailerService) {}

  async sendUserActiveLink(email: string, link: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'User active link',
      html: `
      <a>${link}</a>
      `,
    });
  }
}
