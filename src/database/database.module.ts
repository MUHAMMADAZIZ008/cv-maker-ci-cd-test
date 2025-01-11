import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('PG_HOST') || 'postgres-db',
        port: +configService.get<number>('PG_PORT') || 5432,
        username: configService.get<string>('PG_USER') || 'postgres',
        password: configService.get<string>('PG_PASSWORD') || '3636',
        database: configService.get<string>('PG_DATABASE') || 'cv-maker',
        entities: [Role, User],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
