import { Module } from '@nestjs/common';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [HealthcheckModule, PrismaModule],
})
export class RootModule {}
