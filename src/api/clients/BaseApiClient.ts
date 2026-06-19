import { APIRequestContext, APIResponse } from '@playwright/test';

/**
 * BaseApiClient
 * All API client classes extend this.
 * Handles common headers, auth, and response parsing.
 */
export class BaseApiClient {
  protected readonly request: APIRequestContext;
  protected readonly baseURL: string;

  constructor(request: APIRequestContext, baseURL?: string) {
    this.request = request;
    this.baseURL = baseURL ?? process.env.BASE_URL ?? '';
  }

  // ─── Common Headers ───────────────────────────────────────────────
  protected getHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(process.env.API_TOKEN && {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      }),
    };
  }

  // ─── HTTP Methods ─────────────────────────────────────────────────
  protected async get(endpoint: string): Promise<APIResponse> {
    return this.request.get(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(),
    });
  }

  protected async post<T>(endpoint: string, body: T): Promise<APIResponse> {
    return this.request.post(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(),
      data: body,
    });
  }

  protected async put<T>(endpoint: string, body: T): Promise<APIResponse> {
    return this.request.put(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(),
      data: body,
    });
  }

  protected async patch<T>(endpoint: string, body: Partial<T>): Promise<APIResponse> {
    return this.request.patch(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(),
      data: body,
    });
  }

  protected async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(),
    });
  }
}
