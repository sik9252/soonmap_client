import { httpClient } from '.';
import { useQuery } from '@tanstack/react-query';

export function useGetMainNoticeRequest() {
  return useQuery([`/notice/main`], () =>
    httpClient({
      method: 'GET',
      url: `/notice/main`,
    }),
  );
}

export function useGetMainInfoRequest(params) {
  return useQuery([`/article/main`, params], () =>
    httpClient({
      method: 'GET',
      url: `/article/main`,
    }),
  );
}
