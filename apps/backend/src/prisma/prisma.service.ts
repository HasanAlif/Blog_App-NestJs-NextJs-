import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
// This service extends PrismaClient to manage database connections in a NestJS application
// It implements OnModuleInit and OnModuleDestroy to handle connection lifecycle events
// The onModuleInit method connects to the database when the module is initialized
// The onModuleDestroy method disconnects from the database when the module is destroyed
// This ensures that the database connection is properly managed throughout the lifecycle of the application
// The PrismaClient is imported from the generated Prisma client directory, which is specified in the Prisma schema
// This allows the service to use the Prisma client for database operations
