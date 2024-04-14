import {
  NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_API_PREFIX,
} from 'src/utils/config';

export const api = (path: string, init?: RequestInit) => {
  const baseUrl = NEXT_PUBLIC_API_BASE_URL;
  const apiPrefix = NEXT_PUBLIC_API_PREFIX as string;
  const url = new URL(apiPrefix.concat(path), baseUrl);

  return fetch(url, init);
};
