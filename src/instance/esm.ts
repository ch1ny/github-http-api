import axios from 'axios';
import { GithubRequest } from './base';

export const createInstance = (token: string) => {
  const instance = axios.create({
    baseURL: 'https://api.github.com/',
  });
  instance.defaults.headers.Authorization = `Bearer ${token}`;

  return new GithubRequest(instance);
};
