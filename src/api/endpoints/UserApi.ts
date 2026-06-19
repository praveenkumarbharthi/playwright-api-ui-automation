import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from '../clients/BaseApiClient';

export interface User {
  id?: number;
  name: string;
  email: string;
  username?: string;
}

/**
 * UserApi
 * Encapsulates all /users endpoint calls.
 * Add more endpoint classes in this folder (e.g., OrderApi, ProductApi).
 */
export class UserApi extends BaseApiClient {
  private readonly endpoint = '/users';

  constructor(request: APIRequestContext) {
    super(request);
  }

  getAllUsers(): Promise<APIResponse> {
    return this.get(this.endpoint);
  }

  getUserById(id: number): Promise<APIResponse> {
    return this.get(`${this.endpoint}/${id}`);
  }

  createUser(user: User): Promise<APIResponse> {
    return this.post<User>(this.endpoint, user);
  }

  updateUser(id: number, user: User): Promise<APIResponse> {
    return this.put<User>(`${this.endpoint}/${id}`, user);
  }

  patchUser(id: number, data: Partial<User>): Promise<APIResponse> {
    return this.patch<User>(`${this.endpoint}/${id}`, data);
  }

  deleteUser(id: number): Promise<APIResponse> {
    return this.delete(`${this.endpoint}/${id}`);
  }
}
