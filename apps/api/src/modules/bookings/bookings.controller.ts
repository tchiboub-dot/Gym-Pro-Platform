import { Controller, Post, Get, Delete, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateBookingDto, CancelBookingDto } from '@gympro/shared';

@Controller('bookings')
@UseGuards(JwtAuthGuard)
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  async createBooking(@Request() req, @Body() dto: CreateBookingDto) {
    const gymLocationId = 'default-gym-id'; // TODO: extract from context
    return this.bookingsService.create(req.user.id, gymLocationId, dto);
  }

  @Get('me')
  async getUserBookings(@Request() req, @Query('status') status?: string) {
    return this.bookingsService.findUserBookings(req.user.id, status);
  }

  @Delete(':id')
  async cancelBooking(
    @Request() req,
    @Param('id') id: string,
    @Body() dto: CancelBookingDto,
  ) {
    return this.bookingsService.cancel(id, req.user.id, dto.reason);
  }
}
