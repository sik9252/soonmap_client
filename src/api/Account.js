import { httpClient } from '.';
import { useMutation } from '@tanstack/react-query';

// 회원가입 이메일 검증
export function useRegisterEmailValidateRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: '/join/check',
      data,
    }),
  );
}

// 회원가입 인증코드 검증
export function useRegisterCodeValidateRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: '/join/check/confirm',
      data,
    }),
  );
}

// 실제 회원가입 요청
export function useRegisterRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: '/join',
      data,
    }),
  );
}

// 로그인
export function useLoginRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: '/login',
      data,
    }),
  );
}

// 로그아웃
export function useLogoutRequest() {
  return useMutation(() =>
    httpClient({
      method: 'POST',
      url: '/logout',
    }),
  );
}

// 리프레시
export function useRefreshRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: '/refresh',
      data,
    }),
  );
}

// 회원탈퇴
export function useWithDrawlRequest() {
  return useMutation(() =>
    httpClient({
      method: 'POST',
      url: '/withdraw',
    }),
  );
}
