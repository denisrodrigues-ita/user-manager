import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {
  @Get()
  getHealthcheck(): { status: string } {
    return { status: '🌈' };
  }
}
