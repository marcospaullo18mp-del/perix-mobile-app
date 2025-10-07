import axios from 'axios';

// Configuração base da API
const API_BASE_URL = 'https://api.perix.com/v1';

// Instância do axios com configurações padrão
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor para adicionar token de autenticação
api.interceptors.request.use(
  (config) => {
    const token = AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado ou inválido
      AsyncStorage.removeItem('authToken');
      AsyncStorage.removeItem('user');
      // Redirecionar para tela de login
      navigation.navigate('Login');
    }
    return Promise.reject(error);
  }
);

// Tipos de dados
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Report {
  id: string;
  title: string;
  fieldData: string;
  evidence: string;
  attachments: string[];
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
  createdBy: User;
}

export interface CreateReportData {
  title: string;
  fieldData: string;
  evidence: string;
  attachments: File[];
}

// Serviços de autenticação
export const authService = {
  async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  async register(data: RegisterData): Promise<{ user: User; token: string }> {
    const response = await api.post('/auth/register', data);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
    AsyncStorage.removeItem('authToken');
    AsyncStorage.removeItem('user');
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async refreshToken(): Promise<string> {
    const response = await api.post('/auth/refresh');
    const token = response.data.token;
    AsyncStorage.setItem('authToken', token);
    return token;
  },
};

// Serviços de relatórios
export const reportService = {
  async getReports(params?: {
    page?: number;
    limit?: number;
    status?: string;
    search?: string;
  }): Promise<{ reports: Report[]; total: number; page: number; totalPages: number }> {
    const response = await api.get('/reports', { params });
    return response.data;
  },

  async getReport(id: string): Promise<Report> {
    const response = await api.get(`/reports/${id}`);
    return response.data;
  },

  async createReport(data: CreateReportData): Promise<Report> {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('fieldData', data.fieldData);
    formData.append('evidence', data.evidence);
    
    data.attachments.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file);
    });

    const response = await api.post('/reports', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async updateReport(id: string, data: Partial<CreateReportData>): Promise<Report> {
    const response = await api.put(`/reports/${id}`, data);
    return response.data;
  },

  async deleteReport(id: string): Promise<void> {
    await api.delete(`/reports/${id}`);
  },

  async exportReport(id: string, format: 'pdf' | 'excel' | 'csv'): Promise<Blob> {
    const response = await api.get(`/reports/${id}/export`, {
      params: { format },
      responseType: 'blob',
    });
    return response.data;
  },
};

// Serviços de upload
export const uploadService = {
  async uploadFile(file: File, type: 'avatar' | 'report'): Promise<{ url: string; filename: string }> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const response = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  async deleteFile(url: string): Promise<void> {
    await api.delete('/upload', { data: { url } });
  },
};

// Serviços de notificações
export const notificationService = {
  async getNotifications(): Promise<any[]> {
    const response = await api.get('/notifications');
    return response.data;
  },

  async markAsRead(id: string): Promise<void> {
    await api.put(`/notifications/${id}/read`);
  },

  async markAllAsRead(): Promise<void> {
    await api.put('/notifications/read-all');
  },
};

// Serviços de configurações
export const settingsService = {
  async updateProfile(data: Partial<User>): Promise<User> {
    const response = await api.put('/profile', data);
    return response.data;
  },

  async updatePassword(data: { currentPassword: string; newPassword: string }): Promise<void> {
    await api.put('/profile/password', data);
  },

  async getSettings(): Promise<any> {
    const response = await api.get('/settings');
    return response.data;
  },

  async updateSettings(data: any): Promise<any> {
    const response = await api.put('/settings', data);
    return response.data;
  },
};

// Serviços de ajuda
export const helpService = {
  async getHelpTopics(): Promise<any[]> {
    const response = await api.get('/help/topics');
    return response.data;
  },

  async getHelpContent(id: string): Promise<any> {
    const response = await api.get(`/help/content/${id}`);
    return response.data;
  },

  async submitHelpRequest(data: { subject: string; message: string }): Promise<any> {
    const response = await api.post('/help/request', data);
    return response.data;
  },
};

// Serviços de estatísticas
export const statsService = {
  async getDashboardStats(): Promise<any> {
    const response = await api.get('/stats/dashboard');
    return response.data;
  },

  async getReportStats(params?: { period?: 'week' | 'month' | 'year' }): Promise<any> {
    const response = await api.get('/stats/reports', { params });
    return response.data;
  },
};

export default api;