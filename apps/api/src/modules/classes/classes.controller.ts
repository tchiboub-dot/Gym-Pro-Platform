import { Controller, Get, Param } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private classesService: ClassesService) {}

  @Get()
  async getClasses() {
    const gymLocationId = 'default-gym-id'; // TODO: extract from context
    return this.classesService.findAll(gymLocationId);
  }

  @Get(':id')
  async getClass(@Param('id') id: string) {
    return this.classesService.findOne(id);
  }
}
