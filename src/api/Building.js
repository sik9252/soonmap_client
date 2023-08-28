import { httpClient } from '.';
import { useQuery, useMutation } from '@tanstack/react-query';

// 건물 리스트 요청 + 검색
// export function useGetBuildingRequest(params, isEnabled) {
//   return useQuery(
//     [`/building?keyword=${params.keyword}`, params],
//     () =>
//       httpClient({
//         method: 'GET',
//         url: `/building?keyword=${params.keyword}`,
//       }),
//     { enabled: isEnabled },
//   );
// }

export function useGetBuildingRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'GET',
      url: `/building?keyword=${data.keyword}`,
    }),
  );
}

// 건물 상세요청
export function useGetBuildingDetailRequest(params) {
  return useQuery([`/building/${params.id}`, params], () =>
    httpClient({
      method: 'GET',
      url: `/building/${params.id}`,
    }),
  );
}

// 층별 도면요청
export function useGetFloorImageRequest(params, isEnabled) {
  return useQuery(
    [`/floor?buildingId=${params.buildingId}&floor=${params.floorValue}`, params],
    () =>
      httpClient({
        method: 'GET',
        url: `/floor?buildingId=${params.buildingId}&floor=${params.floorValue}`,
      }),
    { enabled: isEnabled },
  );
}
