import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authSelectors';
import { logoutUser, refreshToken } from 'redux/auth/authSlice';
import { authInstance, refreshTokenQuery } from '../services/api-service';

export const useTokenRefresh = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  authInstance.interceptors.request.use(config => {
    if (token.access) {
      config.headers.Authorization = `Bearer ${token.access}`;
    }
    return config;
  });

  authInstance.interceptors.response.use(
    config => {
      return config;
    },
    async error => {
      const originalRequest = error.config;
      if (
        error?.response?.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        try {
          // dispatch(refreshTokenRequest(token.refresh));
          const response = await refreshTokenQuery(token.refresh);
          authInstance.defaults.headers.common.Authorization = `Bearer ${response}`;
          dispatch(refreshToken(response));

          return authInstance.request(originalRequest);
        } catch (e) {
          console.log(e);
          dispatch(logoutUser());
        }
      }
      throw error;
    }
  );
};
