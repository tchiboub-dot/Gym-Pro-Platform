import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateLeadDto } from '@gympro/shared';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(gymLocationId: string, dto: CreateLeadDto) {
    return this.prisma.lead.create({
      data: {
        gymLocationId,
        ...dto,
      },
    });
  }

  async findAll(gymLocationId: string) {
    return this.prisma.lead.findMany({
      where: { gymLocationId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
