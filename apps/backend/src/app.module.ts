/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// This module is the root module of the NestJS application
// It imports the PrismaModule to provide database access
// The AppController handles incoming HTTP requests
// The AppService contains the business logic for the application
// The AppModule is decorated with @Module, which defines the metadata for the module
// The imports array includes other modules that this module depends on
// The controllers array lists the controllers that belong to this module
// The providers array lists the services that can be injected into controllers or other services
// This structure follows the modular architecture pattern of NestJS, allowing for better organization and separation of concerns
// The AppModule is the entry point for the application, where the NestJS application is bootstrapped
// It allows for easy scaling and maintainability of the application as it grows
// The PrismaModule is responsible for managing the database connection and operations using Prisma ORM
// The AppController and AppService are used to handle requests and provide responses, respectively
// This module is essential for the overall functionality of the backend application, providing a foundation for building the rest of the application
// The AppModule can be tested independently, ensuring that it correctly integrates with the PrismaModule and other components
// The module can be extended in the future to include more features or services as needed
// The AppModule is registered in the main application file, allowing NestJS to recognize it as the root module
// This module is part of a larger NestJS application