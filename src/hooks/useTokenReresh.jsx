import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authSelectors';
import { authInstance } from '../services/api-service';

export const useTokenRefresh = () => {
  const token = useSelector(getToken);
  authInstance.interceptors.request.use(config => {
    if (token.access) {
      config.headers.Authorization = `Bearer ${token.access}`;
    }
    return config;
  });
};
