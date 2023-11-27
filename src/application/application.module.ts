import { Module } from '@nestjs/common';
import { ItemService } from './services/item';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';

@Module({
  imports: [
    // Importing the InfrastructureModule to use repositories in the services
    InfrastructureModule,
  ],
  providers: [
    // All services that contain the business logic are provided here
    ItemService,
  ],
  exports: [
    // Exporting the services so that they can be used in the presentation layer
    ItemService,
  ],
})
export class ApplicationModule {}
