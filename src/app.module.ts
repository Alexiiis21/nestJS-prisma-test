import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './Prisma/prisma.module';

@Module({
  imports: [TaskModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
