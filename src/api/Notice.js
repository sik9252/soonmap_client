import { httpClient } from '.';
import { useQuery } from '@tanstack/react-query';

export function useGetNoticeRequest(params, isEnabled) {
  return useQuery(
    [`/notice?page=${params.page}&title=${params.title}`, params],
    () =>
      httpClient({
        method: 'GET',
        url: `/notice?page=${params.page}&title=${params.title}`,
      }),
    { enabled: isEnabled },
  );
}

export function useGetTopNoticeRequest(params) {
  return useQuery([`/notice/top`, params], () =>
    httpClient({
      method: 'GET',
      url: `/notice/top`,
    }),
  );
}

export function useGetNoticeDetailRequest(params) {
  return useQuery([`/notice/${params.id}`, params], () =>
    httpClient({
      method: 'GET',
      url: `/notice/${params.id}`,
    }),
  );
}
