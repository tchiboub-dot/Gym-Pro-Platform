import { Controller, Get, Query } from '@nestjs/common';
import { ClassSessionsService } from './class-sessions.service';

@Controller('class-sessions')
export class ClassSessionsController {
  constructor(private classSessionsService: ClassSessionsService) {}

  @Get()
  async getSessions(@Query('from') from?: string, @Query('to') to?: string) {
    const gymLocationId = 'default-gym-id'; // TODO: extract from context
    const fromDate = from ? new Date(from) : undefined;
    const toDate = to ? new Date(to) : undefined;
    return this.classSessionsService.findUpcoming(gymLocationId, fromDate, toDate);
  }
}
