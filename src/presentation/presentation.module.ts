import { Module } from '@nestjs/common';
import { ItemController } from './controllers/item.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [
    // Importing the ApplicationModule to use services in the controllers
    ApplicationModule,
  ],
  controllers: [
    // All controllers that are part of the presentation layer go here
    ItemController,
  ],
  // If there are any providers that are exclusively used in the presentation layer, include them here
  providers: [],
})
export class PresentationModule {}
