import apiClient from '@/lib/api-client';

export const classesService = {
  async getAllClasses() {
    const response = await apiClient.get('/classes');
    return response.data;
  },

  async getClassSessions(params?: { from?: string; to?: string }) {
    const response = await apiClient.get('/class-sessions/upcoming', { params });
    return response.data;
  },
};
