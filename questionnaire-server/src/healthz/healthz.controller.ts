import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('healthz')
export class HealthzController {
  @Get()
  @Public()
  healthTest() {
    return 'the connection is healthy';
  }
}
