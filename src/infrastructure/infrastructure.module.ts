import { Module } from '@nestjs/common';
import { TypeOrmDatabaseModule as OrmModule } from './typeorm-database/typeorm-database.module';

@Module({
  imports: [OrmModule],
  exports: [OrmModule],
})
export class InfrastructureModule {}
