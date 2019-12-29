import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Config } from '../Config'

export class BaseService {
  protected readonly httpClient: AxiosInstance

  constructor() {
    this.httpClient = axios.create({ baseURL: Config.ApiUrl })
    this.httpClient.interceptors.request.use(this.authInterceptor)
  }

  private authInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
    const authToken = localStorage.getItem(Config.AuthTokenKey)
    if (!authToken) { return config }

    config.headers['Authorization'] = `Bearer ${authToken}`
    return config
  }
}
