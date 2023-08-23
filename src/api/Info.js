import { httpClient } from '.';
import { useQuery } from '@tanstack/react-query';

export function useGetInfoRequest(params, isEnabled) {
  return useQuery(
    [`/article?page=${params.page}&title=${params.title}`, params],
    () =>
      httpClient({
        method: 'GET',
        url: `/article?page=${params.page}&title=${params.title}`,
      }),
    { enabled: isEnabled },
  );
}

export function useGetInfoDetailRequest(params) {
  return useQuery([`/article/${params.id}`, params], () =>
    httpClient({
      method: 'GET',
      url: `/article/${params.id}`,
    }),
  );
}
