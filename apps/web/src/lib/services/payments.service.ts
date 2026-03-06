import apiClient from '@/lib/api-client';
import type { CreateCheckoutSessionDto } from '@gympro/shared';

export const paymentsService = {
  async createCheckoutSession(data: CreateCheckoutSessionDto) {
    const response = await apiClient.post('/payments/checkout-session', data);
    return response.data;
  },

  async createCustomerPortalSession(returnUrl: string) {
    const response = await apiClient.post('/payments/customer-portal-session', {
      returnUrl,
    });
    return response.data;
  },
};
