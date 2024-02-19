import type { AxiosInstance } from 'axios';
import type {
  GetCertainUserResponse,
  GetTheAuthenticatedUserResponse,
  ListTheAuthenticatedUserSshKeysRequest,
  ListTheAuthenticatedUserSshKeysResponse,
  UpdateTheAuthenticatedUserRequest,
  UpdateTheAuthenticatedUserResponse,
} from '../types';

export class GithubRequest {
  constructor(private instance: AxiosInstance) {
    instance.defaults.headers.accept = 'application/vnd.github+json';
    instance.interceptors.response.use(function (response) {
      return response.data;
    });
  }

  async getTheAuthenticatedUser(): Promise<GetTheAuthenticatedUserResponse> {
    return await this.get('/user');
  }

  async updateTheAuthenticatedUser(
    params: UpdateTheAuthenticatedUserRequest,
  ): Promise<UpdateTheAuthenticatedUserResponse> {
    return await this.patch('/user', params);
  }

  async getCertainUser(username: string): Promise<GetCertainUserResponse> {
    return await this.get(`/user/${username}`);
  }

  async listSshKeys(
    params?: ListTheAuthenticatedUserSshKeysRequest,
  ): Promise<ListTheAuthenticatedUserSshKeysResponse> {
    return await this.get('/user/keys', {
      params,
    });
  }

  private async get(...args: Parameters<typeof this.instance.get>): Promise<any> {
    return await this.instance.get(...args);
  }

  private async post(...args: Parameters<typeof this.instance.post>): Promise<any> {
    return this.instance.post(...args);
  }

  private async delete(...args: Parameters<typeof this.instance.delete>): Promise<any> {
    return this.instance.delete(...args);
  }

  private async patch(...args: Parameters<typeof this.instance.patch>): Promise<any> {
    return this.instance.patch(...args);
  }

  private async put(...args: Parameters<typeof this.instance.put>): Promise<any> {
    return this.instance.put(...args);
  }
}
