import axios, { AxiosRequestConfig } from 'axios';

export class HttpClientService {
  async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    const response = await axios.request<T>(config);
    return response.data;
  }
}
