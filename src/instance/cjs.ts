import axios from 'axios';
import https from 'https';
import { GithubRequest } from './base';

export const createInstance = (token: string) => {
  const instance = axios.create({
    baseURL: 'https://api.github.com/',
    httpsAgent: new https.Agent({
      // TODO:
      rejectUnauthorized: false,
    }),
  });
  instance.defaults.headers.Authorization = `Bearer ${token}`;

  return new GithubRequest(instance);
};
