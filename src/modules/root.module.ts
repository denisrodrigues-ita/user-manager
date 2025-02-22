import { Module } from '@nestjs/common';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HealthcheckModule, PrismaModule, UserModule],
})
export class RootModule {}
