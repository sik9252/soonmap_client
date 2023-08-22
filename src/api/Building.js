import { httpClient } from '.';
import { useQuery } from '@tanstack/react-query';

// 건물 리스트 요청 + 검색
export function useGetBuildingRequest(params, isEnabled) {
  return useQuery(
    [`/building?keyword=${params.keyword}`, params],
    () =>
      httpClient({
        method: 'GET',
        url: `/building?keyword=${params.keyword}`,
      }),
    { enabled: isEnabled },
  );
}

// 건물 상세요청
export function useGetBuildingDetailRequest(params, isEnabled) {
  return useQuery(
    [`/building/${params.id}`, params],
    () =>
      httpClient({
        method: 'GET',
        url: `/building/${params.id}`,
      }),
    { enabled: isEnabled },
  );
}
