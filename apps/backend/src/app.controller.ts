import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
// This controller handles HTTP requests to the root path
// It uses the AppService to respond with a greeting message
// The @Controller decorator defines this class as a controller
// The @Get decorator maps the getHello method to HTTP GET requests at the root path
// The getHello method calls the AppService's getHello method to retrieve the greeting message
// The AppService is injected into the controller via the constructor
// This allows the controller to use the service's business logic to generate the response
// The response is a simple string message returned to the client
// The controller is part of a NestJS application, which follows the modular architecture pattern
// The AppController is registered in the application's module, allowing it to handle incoming requests
// The controller can be tested independently, ensuring that it correctly interacts with the AppService
