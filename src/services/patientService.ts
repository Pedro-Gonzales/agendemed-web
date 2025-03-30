import api from './api';

export const PatientService = {
  async create(patientData: any) {
    const response = await api.post('/patients', patientData);
    return response.data;
  },

  async getAll(params: { page: number; search?: string }) {
    const response = await api.get('/patients', { params });
    return response.data;
  }
};