import { httpClient } from '.';
import { useMutation } from '@tanstack/react-query';

export function useFindIdEmailValidateRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: `/find/id`,
      data,
    }),
  );
}

export function useFindIdCertificateConfirmRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: `/find/id/confirm`,
      data,
    }),
  );
}

export function useFindPasswordValidateRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: `/find/pw`,
      data,
    }),
  );
}

export function useFindPasswordCertificateConfirmRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: `/find/pw/confirm`,
      data,
    }),
  );
}

export function useChangePasswordRequest() {
  return useMutation((data) =>
    httpClient({
      method: 'POST',
      url: `/change/pw`,
      data,
    }),
  );
}
