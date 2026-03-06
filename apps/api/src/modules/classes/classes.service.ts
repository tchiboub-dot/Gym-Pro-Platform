import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async findAll(gymLocationId: string) {
    return this.prisma.class.findMany({
      where: { gymLocationId, isActive: true },
      include: { coach: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.class.findUnique({
      where: { id },
      include: { coach: true, sessions: true },
    });
  }
}
