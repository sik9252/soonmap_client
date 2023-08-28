import axios, { isAxiosError, AxiosError } from 'axios';

const SERVER_IP = import.meta.env.VITE_SERVER_IP;

export const useAxios = axios.create({
  baseURL: `${SERVER_IP}`,
});

export async function httpClient(config, headers) {
  try {
    const response = await useAxios.request({ ...config, headers: headers });
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response.data.message ? error.response.data.message : '알 수 없는 문제가 발생했습니다.');
    }
  }
}

useAxios.interceptors.request.use((config) => {
  const ACCESS_TOKEN = localStorage.getItem('user-accessToken');

  // 특정 api 요청에 header 제거하기 위한 코드
  const skipAuthHeader = config.headers.skipAuthHeader;

  if (ACCESS_TOKEN && !skipAuthHeader && config.headers) {
    config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
  }

  if (skipAuthHeader) {
    delete config.headers.skipAuthHeader;
  }

  return config;
});

useAxios.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;
    console.log('error:', error);
    console.log('originalRequest:', originalRequest);

    if (error.response.status === 417 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('user-refreshToken');

      if (refreshToken) {
        try {
          const response = await useAxios.post('/refresh', { refreshToken }, { headers: { skipAuthHeader: true } });

          if (response.status === 200) {
            localStorage.setItem('user-accessToken', response.data);

            if (originalRequest && originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${response.data}`;
              return useAxios.request(originalRequest);
            }
          }
        } catch (error) {
          localStorage.removeItem('user-accessToken');
          localStorage.removeItem('user-refreshToken');
          localStorage.removeItem('user-userId');
          window.location.href = '/my';
        }
      }
    }

    return Promise.reject(error);
  },
);
