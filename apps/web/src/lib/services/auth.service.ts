import apiClient from '@/lib/api-client';
import type { RegisterDto, LoginDto } from '@gympro/shared';

export const authService = {
  async register(data: RegisterDto) {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  async login(data: LoginDto) {
    const response = await apiClient.post('/auth/login', data);
    if (response.data.accessToken) {
      localStorage.setItem('access_token', response.data.accessToken);
      if (response.data.refreshToken) {
        localStorage.setItem('refresh_token', response.data.refreshToken);
      }
    }
    return response.data;
  },

  async logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  async getCurrentUser() {
    const response = await apiClient.get('/users/me');
    return response.data;
  },
};
