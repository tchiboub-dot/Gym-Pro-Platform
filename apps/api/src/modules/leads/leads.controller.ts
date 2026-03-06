import { Controller, Post, Get, Body } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from '@gympro/shared';

@Controller('leads')
export class LeadsController {
  constructor(private leadsService: LeadsService) {}

  @Post()
  async createLead(@Body() dto: CreateLeadDto) {
    const gymLocationId = 'default-gym-id'; // TODO: extract from context
    return this.leadsService.create(gymLocationId, dto);
  }

  @Get()
  async getLeads() {
    const gymLocationId = 'default-gym-id'; // TODO: extract from context
    return this.leadsService.findAll(gymLocationId);
  }
}
