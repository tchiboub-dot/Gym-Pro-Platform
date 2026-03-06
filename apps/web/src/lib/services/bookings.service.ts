import apiClient from '@/lib/api-client';
import type { CreateBookingDto } from '@gympro/shared';

export const bookingsService = {
  async getUserBookings(status?: string) {
    const params = status ? { status } : {};
    const response = await apiClient.get('/bookings/me', { params });
    return response.data;
  },

  async createBooking(data: CreateBookingDto) {
    const response = await apiClient.post('/bookings', data);
    return response.data;
  },

  async cancelBooking(bookingId: string, reason?: string) {
    const response = await apiClient.delete(`/bookings/${bookingId}`, {
      data: { cancelReason: reason },
    });
    return response.data;
  },
};
