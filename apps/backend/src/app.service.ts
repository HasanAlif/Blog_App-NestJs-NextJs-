/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is the backend service.';
  }
}
// This service provides a simple method to return a greeting message
// It can be injected into controllers or other services in the NestJS application
// The getHello method returns a string that can be used in HTTP responses
// This service is part of the application's business logic layer
// It can be extended in the future to include more complex logic or data retrieval
// The AppService is registered in the AppModule, allowing it to be used throughout the application
// This service is essential for the initial setup of the application, providing a basic response to test
// The AppService can be tested independently, ensuring that it correctly returns the expected greeting message
// It follows the modular architecture pattern of NestJS, allowing for better organization and separation of concerns
// The AppService can be easily mocked in unit tests, facilitating testing of components that depend on it
// This service is a fundamental part of the backend application, providing a starting point for further development