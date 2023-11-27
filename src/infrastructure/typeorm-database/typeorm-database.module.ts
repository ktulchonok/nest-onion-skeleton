import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ITEM_REPOSITORY_TOKEN } from '@domain/constants';
import { ItemRepository } from './repositories/item.repository';
import { Item } from './entities';

const Entities = [Item];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: Entities,
        synchronize: configService.get<boolean>('TYPEORM_SYNC'),
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature(Entities),
  ],
  providers: [
    {
      provide: ITEM_REPOSITORY_TOKEN,
      useClass: ItemRepository,
    },
  ],
  exports: [ITEM_REPOSITORY_TOKEN, TypeOrmModule],
})
export class TypeOrmDatabaseModule {}
