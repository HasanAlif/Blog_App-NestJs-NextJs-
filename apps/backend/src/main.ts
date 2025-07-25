/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap().catch((err) => console.error('Bootstrap error:', err));
// This is the entry point of the NestJS application
// It creates an instance of the Nest application using the AppModule
// The application listens on a port specified by the environment variable PORT, defaulting to 8000 if not set
// The bootstrap function is asynchronous, allowing for proper initialization of the application
// Any errors during the bootstrap process are caught and logged to the console
// This setup is essential for starting the backend service, enabling it to handle incoming requests
// The NestFactory is a utility provided by NestJS to create and configure the application instance
// The AppModule is the root module of the application, which imports other modules and registers controllers
// This file is typically the main entry point for the backend service, allowing it to be run
// The application can be extended with additional modules, controllers, and services as needed
// The NestJS framework provides a modular architecture, making it easy to organize and maintain the code
// This file is part of a larger NestJS application, which follows best practices for building scalable and maintainable backend services
// The application can be tested independently, ensuring that it starts correctly and listens for requests
// The bootstrap function can be modified to include additional configuration or middleware as needed
// This setup is crucial for the overall functionality of the backend service, providing a foundation for further development and integration with other components of the application