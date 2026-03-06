import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class ClassSessionsService {
  constructor(private prisma: PrismaService) {}

  async findUpcoming(gymLocationId: string, from?: Date, to?: Date) {
    return this.prisma.classSession.findMany({
      where: {
        gymLocationId,
        startsAt: {
          gte: from || new Date(),
          ...(to && { lte: to }),
        },
        status: 'SCHEDULED',
      },
      include: {
        class: true,
        coach: true,
      },
      orderBy: { startsAt: 'asc' },
    });
  }
}
